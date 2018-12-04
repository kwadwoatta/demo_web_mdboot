import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
render() {
return (
<Footer color="aqua-gradient" className="font-small pt-4 mt-4">
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
      <h5 className="title">Links</h5>
      <Row>
        <Col className="list-unstyled" md="3" sm="3" xs="3">
          <a href="#!">Link 1</a>
        </Col>
        <Col className="list-unstyled" md="3" sm="3" xs="3">
          <a href="#!">Link 2</a>
        </Col>
        <Col className="list-unstyled" md="3" sm="3" xs="3">
          <a href="#!">Link 3</a>
        </Col>
        <Col className="list-unstyled" md="3" sm="3" xs="3">
          <a href="#!">Link 4</a>
        </Col>
      </Row>
      </Col>
    </Row>
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="https://www.MDBootstrap.com">Prince Ofori</a>
    </Container>
  </div>
</Footer>
);
}
}

export default FooterPage;