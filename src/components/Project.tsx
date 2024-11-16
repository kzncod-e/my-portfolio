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
      description: "lorem",
      imgUrl: projimg1,
    },
    {
      title: "Chat-hub",
      description: "lorem",
      imgUrl: projimg2,
    },
    {
      title: "my-eccomerve",
      description: "lorem",
      imgUrl: projimg3,
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
