import React, { Component } from 'react';
import './footer-button.css';
import linkBtn from '../../../images/footer-arrow.png';

class FooterButton extends Component {
  render() {
    const { image, text } = this.props;
    return (
      <div className="footer-button">
        <img src={image} alt="Footer Button" width="210" />
        <div className='footer-button-bottom' onMouseDown={this.props.onPress}>
          <div className='footer-button-text'>{text}</div>
          <img src={linkBtn} alt="Footer Button Arrow" className='footer-button-arrow' />
        </div>
      </div>
    );
  }
}

export default FooterButton;
