import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
 
class PureSlider extends Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={5}
        naturalSlideHeight={2}
        totalSlides={3}
      >
                  <h1> Sliders failed </h1>

        <Slider>
          <Slide index={0}><h1>I am the first Slide.</h1></Slide>
          <Slide index={1}> <img src="https://cms.qz.com/wp-content/uploads/2018/04/iron-man-2-e1524664570128.jpg?quality=75&strip=all&w=900&h=506&crop=1" /></Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>

        <h1> Sliders failed </h1>
      </CarouselProvider>
    );
  }
}
export default PureSlider