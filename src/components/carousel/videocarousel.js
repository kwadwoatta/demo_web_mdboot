import React, { Component } from "react";
import { Carousel, CarouselInner, CarouselItem } from "mdbreact";

class CarouselPage extends Component {
  render() {
    return (
      <Carousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
        <CarouselInner>
          <CarouselItem itemId="1">
            <video className="video-fluid d-block" autoPlay loop>
              <source src="https://gcs-vimeo.akamaized.net/exp=1543949701~acl=%2A%2F722779149.mp4%2A~hmac=84cfc3ff8f5bbdf4a1da5472582167a04113bd008403f61d915e5eedfda73dc4/vimeo-prod-skyfire-std-us/01/2150/8/210752478/722779149.mp4" type="video/mp4" />
            </video>
          </CarouselItem>
          <CarouselItem itemId="2">
            <video className="video-fluid d-block" autoPlay loop>
              <source src="https://gcs-vimeo.akamaized.net/exp=1543950006~acl=%2A%2F699571361.mp4%2A~hmac=6ae90e98d937140459fa53f9f3cbcfe13c8259bd3ed1253233bee260bcd12a35/vimeo-prod-skyfire-std-us/01/1102/8/205512696/699571361.mp4" type="video/mp4" />
            </video>
          </CarouselItem>
          <CarouselItem itemId="3">
            <video className="video-fluid d-block" autoPlay loop>
              <source src="https://gcs-vimeo.akamaized.net/exp=1543950209~acl=%2A%2F559551522.mp4%2A~hmac=496e791721193430300ef75e32ea1fd38818c114daa7511a91df1bf377aff151/vimeo-prod-skyfire-std-us/01/4649/6/173249177/559551522.mp4" type="video/mp4" />
            </video>
          </CarouselItem>
        </CarouselInner>
      </Carousel>
    );
  }
}

export default CarouselPage;