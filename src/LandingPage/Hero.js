import { Container, Row, Col, Image } from "react-bootstrap";
import img from "../Images/photography.jpeg";

export default function Hero() {
  return (
    <Container className="py-5">
      <Row>
        <Col lg={6} md={6} sm={12} className="d-flex align-items-center">
          <div className="text-lg-start text-md-start text-center">
            <h1 className="font-primary color-primary">
              Feel in every Picture
            </h1>
            <p className="font-secondary color-secondary py-3">
              Image you are going to create is how photography makes us look for
              the beauty in everything..{" "}
            </p>
          </div>
        </Col>
        <Col lg={6} md={6} className="d-none d-lg-block">
          <Image src={img} fluid />
        </Col>
      </Row>
    </Container>
  );
}
