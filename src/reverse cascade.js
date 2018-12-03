import React, { Component } from 'react';
import { Card, CardTitle, Button, Row, Col, Fa } from 'mdbreact';

class CardExample extends Component {
render() {
return (
<Row>
  <Col>
  <Card className="card-image" style={{ backgroundImage: "url'https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
            }}>
    <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
      <div>
        <h5 className="pink-text">
          <Fa icon="pie-chart" /> Marketing
        </h5>
        <CardTitle tag="h3" className="pt-2">
          <strong>This is card title</strong>
        </CardTitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Repellat fugiat, laboriosam, voluptatem, optio vero odio
          nam sit officia accusamus minus error nisi architecto
          nulla ipsum dignissimos. Odit sed qui, dolorum!
        </p>
        <Button color="pink">
          <Fa icon="clone left" /> View project
        </Button>
      </div>
    </div>
  </Card>
  </Col>
  <Col>
  <Card className="card-image" style={{
              backgroundImage:
                "url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')"
            }}>
    <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
      <div>
        <h5 className="orange-text">
          <Fa icon="desktop" /> Software
        </h5>
        <CardTitle tag="h3" className="pt-2">
          <strong>This is card title</strong>
        </CardTitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Repellat fugiat, laboriosam, voluptatem, optio vero odio
          nam sit officia accusamus minus error nisi architecto
          nulla ipsum dignissimos. Odit sed qui, dolorum!
        </p>
        <Button color="deep-orange">
          <Fa icon="clone left" /> View project
        </Button>
      </div>
    </div>
  </Card>
  </Col>
</Row>
)
}
}

export default CardExample;