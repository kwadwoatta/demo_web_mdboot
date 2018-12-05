import React from "react";
import { Col, Container, Row, Footer, Button, Fa } from "mdbreact";

class FooterPage extends React.Component {
render() {
return (
<Footer color="black" className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <h5 className="title">Footer Content</h5>
      <p>
        Here you can use rows and columns here to organize your footer
        content.
      </p>
      </Col>
      <Col md="6">
      <Row>
        <Col md="3" sm="3" xs="3">
        <Button>
          <a href="#!"><Fa icon="twitter" size="sm"/></a>
        </Button>
        </Col>
        <Col md="3" sm="3" xs="3">
        <Button>
          <a href="https://www.linkedin.com/in/prince-ofori"><Fa icon="linkedin" size="sm"/></a>
        </Button>
        </Col>
        <Col md="3" sm="3" xs="3">
        <Button>
          <a href="https://wa.me/0501658102"><Fa icon="whatsapp" size="sm"/></a>
        </Button>
        </Col>
        <Col md="3" sm="3" xs="3">
        <Button>
          <a href="mailto:princeofori065@gmail.com"><Fa icon="envelope" size="sm"/></a>
        </Button>
        </Col>
      </Row>
      </Col>
    </Row>
  </Container>
  <div className="footer-copyright text-left py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="localhost:3000">Prince Ofori</a>
    </Container>
  </div>
</Footer>
);
}
}

export default FooterPage;