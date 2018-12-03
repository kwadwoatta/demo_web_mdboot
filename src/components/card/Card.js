import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Col } from 'mdbreact';

let CardExample = () => {
    return (
      <Col>
        <Card style={{ maxWidth: "22rem", margin: "15px 0px", maxHeight: "22rem"}}>
          <CardImage
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
            waves
          />
          <CardBody style={{maxHeight: "15rem"}}>
            <div style={{maxHeight: "15rem"}}>
            <CardTitle>Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make
              up the bulk of the card&apos;s content.
            </CardText>
            <Button href="#">Button</Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
}

export default CardExample;

