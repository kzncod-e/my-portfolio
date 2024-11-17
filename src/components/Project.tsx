import { Col, Container, Tab, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Nav from "react-bootstrap/Nav";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projimg1 from "../assets/img/eco-traveler2.png";
import projimg2 from "../assets/img/chat-hub.png";
import projimg3 from "../assets/img/my- eccomerce.png";

export default function Projects() {
  const projects = [
    {
      title: "eco-traveler",
      description:
        "Discover your dream destinations! Our AI-powered site offers live, personalized recommendations, interactive maps, quizzes, and custom itineraries—all designed to make trip planning exciting and tailored to you",
      imgUrl: projimg1,
      link: "https://my-eccomerce2-99fo1qlm5-kzncods-projects.vercel.app/",
    },
    {
      title: "Chat-hub",
      description:
        "a real chat aplication that allow user send message like image or text base on topic their interest",
      imgUrl: projimg2,
      link: "https://github.com/Chat-H-b/chat-io",
    },
    {
      title: "my-eccomerve",
      description: `This sleek eCommerce site, built with Next.js and styled with Tailwind CSS, features a modern design, prominent product displays, and intuitive navigation links for Home, Products, Login, Register, and Wishlists. Users can easily "Read More" or "Add to Cart" for a seamless shopping experience.`,
      imgUrl: projimg3,
      link: "https://my-eccomerce2-99fo1qlm5-kzncods-projects.vercel.app/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
              ipsa! Temporibus reprehenderit nam laborum repellendus maiores
              libero repudiandae, id quidem aut possimus sunt unde hic ipsum eum
              modi praesentium beatae.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-center items-center"
                id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Disabled</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
}
