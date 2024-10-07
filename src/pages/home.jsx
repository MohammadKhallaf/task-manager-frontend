import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8} className="text-center">
          <h1 className="display-4 mb-4">Welcome to Task Manager</h1>
          <p className="lead mb-4">Organize your work and life, easily.</p>
          <Card className="shadow-lg">
            <Card.Body>
              <Card.Title>Get Started</Card.Title>
              <Card.Text>Join us today and boost your productivity!</Card.Text>
              <Button
                as={Link}
                to="/register"
                variant="primary"
                size="lg"
                className="me-3"
              >
                Sign Up
              </Button>
              <Button as={Link} to="/login" variant="outline-primary" size="lg">
                Login
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
