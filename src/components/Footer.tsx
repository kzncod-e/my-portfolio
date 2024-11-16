import { Container, Col, Row } from "react-bootstrap";

import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="items-center">
          <Col sm={6}>
            <img src={logo} alt="" />
          </Col>
          <Col sm={6} className="text-center sm:text-end">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>CopyRight 2024. All Right reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
