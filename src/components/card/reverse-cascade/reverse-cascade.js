import React, { Component } from 'react';
import { Card, CardBody, CardImage, CardTitle, CardText, Row, Col, Fa } from 'mdbreact';

class CardExample extends Component {
  render() {
    return (
      <Row>
        <Col style={{ maxWidth: "40rem" }}>
          <Card reverse>
            <CardImage cascade style={{ height: '20rem'}} src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" />
            <CardBody cascade className="text-center">
              <CardTitle>My adventure</CardTitle>
              <h5 className="indigo-text"><strong>Photography</strong></h5>
              <CardText>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</CardText>
              <a href="#!" className="icons-sm li-ic ml-1"><Fa icon="linkedin" /></a>
              <a href="#!" className="icons-sm tw-ic ml-1"><Fa icon="twitter" /></a>
              <a href="#!" className="icons-sm fb-ic ml-1"><Fa icon="facebook" /></a>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default CardExample;