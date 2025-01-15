import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <Container className="py-5 text-center">
      <Row>
        <Col>
          <h1 className="display-4">Welcome to Our Online Store</h1>
          <p className="lead mt-3">
            Discover amazing products at unbeatable prices. Enjoy a seamless shopping experience.
          </p>
          <Link to="/store">
            <Button className="mt-4 px-5 py-2" variant="primary">
              Shop Now
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={4}>
          <img
            src="/electronics.jpeg"
            alt="Category 1"
            className="rounded mb-3"
          />
          <h5>Electronics</h5>
          <p>Get the latest gadgets and devices at unbeatable prices.</p>
        </Col>
        <Col md={4}>
          <img
            src="/fashion.jpeg"
            alt="Category 2"
            className="rounded mb-3"
          />
          <h5>Fashion</h5>
          <p>Style your wardrobe with the trendiest clothing and accessories.</p>
        </Col>
        <Col md={4}>
          <img
            src="ome.jpeg"
            alt="Category 3"
            className="rounded mb-3"
          />
          <h5>Home Goods</h5>
          <p>Find everything you need to make your house a home.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
