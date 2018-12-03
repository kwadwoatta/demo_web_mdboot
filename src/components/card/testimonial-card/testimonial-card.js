import React, { Component } from 'react';
import { Card, CardBody, CardUp, Avatar, Row, Col, Fa } from 'mdbreact';

class CardExample extends Component {
  render() {
    return (
      <Row>
        <Col style={{maxWidth: "22rem"}}>
          <Card testimonial>
            <CardUp className="indigo lighten-1" />
            <Avatar className="mx-auto white">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                alt=""
              />
            </Avatar>
            <CardBody>
              <h4 className="card-title">Anna Doe</h4>
              <hr />
              <p>
                <Fa icon="quote-left" /> Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Eos, adipisci
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col style={{maxWidth: "22rem"}}>
          <Card testimonial>
            <CardUp gradient="aqua" />
            <Avatar className="mx-auto white">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                alt=""
              />
            </Avatar>
            <CardBody>
              <h4 className="card-title">Martha Smith</h4>
              <hr />
              <p>
                <Fa icon="quote-left" /> Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Eos, adipisci
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default CardExample;