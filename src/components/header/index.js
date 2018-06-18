import React, { Component } from 'react';
import './header.css';
import headerImg from '../../images/header.png';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img src={headerImg} alt="Header" className='header-image' />
        <div className='header-text'>get@sammietalyor.com</div>
        <div className='header-text'>(415) 300 0834</div>
      </div>
    );
  }
}

export default Header;
