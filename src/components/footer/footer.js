import React from "react";
import { Col, Container, Row, Footer, Animation, Fa } from "mdbreact";

class FooterPage extends React.Component {
render() {
return (
<Footer color="black" className="font-small pt-4 mt-4 foot">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <h5 className="title">Lorem Ipsum</h5>
      <p>
      Lorem ipsum dolor sit amet, sed omittam similique at.
      </p>
      </Col>
      <Col md="6">
      <Container>
        <Row>
          <Col md="3" sm="3" xs="3">
            <Animation type="swing" reveal infinite>
              <a href="#!"><Fa icon="twitter" size="lg"/></a>
            </Animation>
          </Col>

          <Col md="3" sm="3" xs="3">
          <Animation type="tada" reveal infinite>
            <a href="https://www.linkedin.com/in/prince-ofori"><Fa icon="linkedin" size="lg"/></a>
          </Animation>
          </Col>

          <Col md="3" sm="3" xs="3">
            <Animation type="wobble" reveal infinite>
              <a href="https://wa.me/0501658102"><Fa icon="whatsapp" size="lg"/></a>
            </Animation>
          </Col>

          <Col md="3" sm="3" xs="3">
          <Animation type="jello" reveal infinite>
            <a href="mailto:princeofori065@gmail.com"><Fa icon="envelope" size="lg"/></a>
          </Animation>
          </Col>

        </Row>
      </Container>
      </Col>
    </Row>
  </Container>
  <div className="footer-copyright text-left py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="localhost:3000">Built with JS <span role="img" aria-label="love">💖</span></a>
    </Container>
  </div>
</Footer>
);
}
}

export default FooterPage;