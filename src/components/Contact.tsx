import { useEffect, useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
export default function Contact() {
  const initialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  interface Status {
    success: boolean;
    message: string;
  }
  const [formDetails, setFormDetails] = useState(initialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState<Status>();
  const onFormUpdate = (category: string, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  useEffect(() => {
    console.log(formDetails);
  }, [formDetails]);
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      setButtonText("Sending..");
      const response = await fetch("http://localhost:4000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails),
      });
      setButtonText("Send");
      const result = await response.json();
      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({
          success: false,
          message: "Something Went Wrong,please try again",
        });
        // setFormDetails(initialDetails)
      }
    } catch (error) {
      console.log(error.error);
    }
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="items-center">
          <Col md={6}>
            <img src={contactImg} alt="contact" />
          </Col>
          <Col md={6}>
            <h2>Get in touch</h2>
            <form>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.phone}
                    placeholder="phone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    name=""
                    rows={6}
                    value={formDetails.message}
                    onChange={(e) =>
                      onFormUpdate("message", e.target.value)
                    }></textarea>
                  <button type="submit" onClick={handleSubmit}>
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status?.message && (
                  <Col>
                    <p
                      className={
                        status?.success == false ? "danger" : "success"
                      }>
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
