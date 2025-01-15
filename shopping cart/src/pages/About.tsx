import { Container, Row, Col } from "react-bootstrap";

const About: React.FC = () => {
  return (
    <Container className="py-5">
      <Row className="text-center">
        <Col>
          <h1 className="display-4">About Us</h1>
          <p className="lead mt-3">
            Learn more about our mission, vision, and the story behind our store.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6}>
          <h3>Our Mission</h3>
          <p>
            Our mission is to provide high-quality products at affordable prices while ensuring an exceptional shopping experience for our customers.
          </p>
        </Col>
        <Col md={6}>
          <h3>Our Vision</h3>
          <p>
            To become a leading e-commerce platform that customers trust for all their shopping needs.
          </p>
        </Col>
      </Row>
     
      <Row className="mt-5">
        <Col md={4} className="text-center">
          <h5>Quality Products</h5>
          <p>We handpick every item to ensure top-notch quality for our customers.</p>
        </Col>
        <Col md={4} className="text-center">
          <h5>Customer First</h5>
          <p>Your satisfaction is our top priority. We’re here to serve you.</p>
        </Col>
        <Col md={4} className="text-center">
          <h5>Seamless Shopping</h5>
          <p>Enjoy a smooth and hassle-free shopping experience every time.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
