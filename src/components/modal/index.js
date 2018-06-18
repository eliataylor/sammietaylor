import React, { Component } from 'react';
import './modal.css';

import Slider from '../slider';

import arrow_left from '../../images/arrow_left.png';
import arrow_right from '../../images/arrow_right.png';

export default class Modal extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      text: '',
      images: [],
      index: 0,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.title !== undefined) {
      this.setState({title: nextProps.title, text: nextProps.text})
    }
  }

  render() {
    const { hide, images } = this.props;
    const { title, text, index } = this.state;
    
    const className = 'custom-modal ' + (hide ? 'hidden' : 'visible');

    return (
      <div className={className} onMouseDown={this.props.endModal}>
        
        <div className='modal-view' onMouseDown={e => e.stopPropagation()}>
          <div className='modal-text-container'>
            <span className='modal-title-text'>{title}</span>
          </div>
          <div className='modal-text-container'>
            <span className='modal-text'>{text}</span>
          </div>
          <div className='portfolio-view'>
            <a className='arrow-left' onClick={() => {
              if (index > 0) {
                this.setState({index: index - 1})
              }
            }}>
              <img src={arrow_left} alt='left arrow' className='arrow-button' />
            </a>

            <div className='slider-container'>
              <Slider
                images={images}
                index={index}
              />
            </div>

            <a className='arrow-right' onClick={() => {
              if (index < images.length - 1) {
                this.setState({ index: index + 1 })
              }
            }}>
              <img src={arrow_right} alt='left arrow' className='arrow-button' />
            </a>
          </div>
        </div>
      </div>
    )
  }
};


