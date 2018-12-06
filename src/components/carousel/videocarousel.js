import React, { Component } from "react";
import { Carousel, CarouselInner, CarouselItem } from "mdbreact";

class CarouselPage extends Component {
  render() {
    return (
      <Carousel activeItem={1} length={3} thumbnails showControls={false} showIndicators={true} className="z-depth-1" >
        <CarouselInner>
          <CarouselItem itemId="1">
            <video className="video-fluid d-block" autoPlay loop>
              <source src="https://storage.googleapis.com/coverr-main/mp4/Aloha-Mundo.mp4" type="video/mp4" />
            </video>
          </CarouselItem>
          <CarouselItem itemId="2">
            <video className="video-fluid d-block" autoPlay loop>
              <source src="https://storage.googleapis.com/coverr-main/mp4/Ristretto.mp4" type="video/mp4" />
            </video>
          </CarouselItem>
          <CarouselItem itemId="3">
            <video className="video-fluid d-block" autoPlay loop>
              <source src="https://storage.googleapis.com/coverr-main/mp4/Egg-Shop.mp4" type="video/mp4" />
            </video>
          </CarouselItem>
        </CarouselInner>
      </Carousel>
    );
  }
}

export default CarouselPage;