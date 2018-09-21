import React, { Component } from 'react';
import Slide from './Slide';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import IMG_1305 from './../images/IMG_1305.JPG'
import IMG_1306 from './../images/IMG_1306.JPG'
import IMG_1307 from './../images/IMG_1307.JPG'
import IMG_1308 from './../images/IMG_1308.JPG'


export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: ['IMG_1305', 'IMG_1306', 'IMG_1307', 'IMG_1308'],
      currentIndex: 0,
      translateValue: 0,
    }
  }

  goToPrevSlide = () => {

  }

  goToNextSlide = () => {
    if(this.state.currentIndex === this.state.images.length -1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }


  render() {
    return (
      <div className="slider">

        <div className="slider-wrapper"
          style={{
            transform: `translateX($(this.state.translateValue)px)`,
            transition: 'transform ease-out 0.45s'
          }}>           
          {
            this.state.images.map((image,i) => (
              <Slide key={i} image={image} />
            ))
          }
        </div>
        <LeftArrow 
          goToPrevSlide={this.goToPrevSlide}  
        />
        <RightArrow 
          goToNextSlide={this.goToNextSlide}
        />
      </div>
    );
  }
}