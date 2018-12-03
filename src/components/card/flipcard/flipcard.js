import React from 'react';
import { FlippingCard, Card, CardBody, Col, Fa, CardUp, Avatar } from 'mdbreact';

class CardExample extends React.Component {

  state = {
    flipped: false
  }

  handleFlipping = () => {
    this.setState({ flipped: !this.state.flipped });
  }

  render() {
    return (
      <Col style={{ minHeight: '26rem' }}>
        <FlippingCard
          flipped={this.state.flipped}
          className="text-center h-100 w-100"
          style={{ maxWidth: "22rem" }}
        >
          <Card className="face front">
            <CardUp>
              <img
                className="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg"
                alt=""
              />
            </CardUp>
            <Avatar className="mx-auto white" circle>
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                alt=""
                className="rounded-circle"
              />
            </Avatar>
            <CardBody>
              <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
              <p className="font-weight-bold blue-text">Web developer</p>
              <a
                href="#!"
                className="rotate-btn"
                data-card="card-1"
                onClick={this.handleFlipping}
              >
                <Fa icon="repeat" /> Click here to rotate
              </a>
            </CardBody>
          </Card>
          <Card className="face back">
            <CardBody>
              <h4 className="font-weight-bold">About me</h4>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                dolores nihil quae in mollitia asperiores ut rerum
                repellendus, voluptatum eum, officia laudantium quaerat?
              </p>
              <hr />
              <ul className="list-inline py-2">
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg fb-ic">
                    <Fa icon="facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg tw-ic">
                    <Fa icon="twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg gplus-ic">
                    <Fa icon="google-plus" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg li-ic">
                    <Fa icon="linkedin" />
                  </a>
                </li>
              </ul>
              <a
                href="#!"
                className="rotate-btn"
                data-card="card-1"
                onClick={this.handleFlipping}
              >
                <Fa icon="undo" /> Click here to rotate back
              </a>
            </CardBody>
          </Card>
        </FlippingCard>
      </Col>
    )
  }
}

export default CardExample;