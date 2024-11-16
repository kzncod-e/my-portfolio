import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";

import TrackVisibility from "react-on-screen";

const Banner: React.FC = () => {
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [delta, setDelta] = useState<number>(300 - Math.random() * 100);
  // const [index, setIndex] = useState<number>(1);
  const toRotate: string[] = [
    "Front-end Developer",
    "Back-end Developer",
    "Full-Stack Developer",
  ];
  const period: number = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      // setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      // setIndex(1);
      setDelta(500);
    } else {
      // setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className={"animate__animated animate__fadeIn"}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi! I'm Raihan`}{" "}
                <span
                  className="txt-rotate"
                  data-rotate='[ "Front-end Developer", "Back-end Developer", "Full-Stack Developer" ]'>
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                I'm a full-stack developer with a background in the Arabic
                Language Department and a diploma in English. Recently, I
                completed the Hacktiv8 bootcamp, where I gained hands-on
                experience in modern web technologies like Next.js, React, and
                Tailwind CSS. I enjoy building responsive, user-focused web
                applications and am continuously learning new tools and
                techniques to enhance my skills. Passionate about developing
                intuitive solutions, I'm excited to bring creativity and
                efficiency to projects in eCommerce, social media, and beyond.
              </p>
              <button onClick={() => console.log("connect")}>
                Let’s Connect <ArrowRightCircle size={25} />
              </button>
            </div>
            ``
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }: { isVisible: boolean }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Banner;
