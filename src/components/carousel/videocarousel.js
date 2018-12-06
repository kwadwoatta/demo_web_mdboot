import React, { Component } from "react";
import { Carousel, CarouselInner, CarouselItem } from "mdbreact";
import CoderVid from './videos/Typing Of Codes.MP4';
import CoffeeVid from './videos/Cup Of Coffee On Top Of Coffee Beans.MP4';
import FoodVid from './videos/Free stock video of bread, eggs, food.MP4';

class CarouselPage extends Component {
  render() {
    return (
      <Carousel activeItem={1} length={3} thumbnails showControls={true} showIndicators={true} className="z-depth-2" >
        <CarouselInner>
          <CarouselItem itemId="1">
            <video className="video-fluid d-block" autoPlay loop>
              <source src={CoderVid} type="video/mp4" />
            </video>
          </CarouselItem>
          <CarouselItem itemId="2">
            <video className="video-fluid d-block" autoPlay loop>
              <source src={CoffeeVid} type="video/mp4" />
            </video>
          </CarouselItem>
          <CarouselItem itemId="3">
            <video className="video-fluid d-block" autoPlay loop>
              <source src={FoodVid} type="video/mp4"/>
            </video>
          </CarouselItem>
        </CarouselInner>
      </Carousel>
    );
  }
}

export default CarouselPage;