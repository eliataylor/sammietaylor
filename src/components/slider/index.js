import React, { Component } from 'react';
import './slider.css';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      translateValue: 0,
      index: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    const { index } = this.state;
    if (nextProps.images !== undefined) {
      const translateValue = -this.slideWidth() * nextProps.index;
      console.log(nextProps.index, translateValue);
      this.setState({ images: nextProps.images, index: nextProps.index, translateValue })
    }
  }

  slideWidth() {
    return document.querySelector('.slide-view').clientWidth
  }

  render() {
    const { images, translateValue } = this.state;

    return (
      <div className='slide-view'>
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
          {
            images.map((image, idx) => {
              return (
                <div key={idx} className='image-container'>
                  <div style={{ backgroundImage: (`url('`+image+`')`)}} className='portfolio' />
                  {/* <img src={image} className='portfolio'/> */}
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
};
