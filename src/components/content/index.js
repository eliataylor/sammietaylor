import React, { Component } from 'react';
import './content.css';
import logo from '../../images/logo.png';

class Content extends Component {
  render() {
    return (
      <div className='content'>
        <img src={logo} alt='Logo' className='content-logo' />
        <div>
          <span className='content-highlight-text'>Easy on the eyes</span>
          <span className='content-bold-text'> is my design motto.</span>
        </div>
        <div className='content-text'>I enjoy building pretty, clean, easy to read, and user friendly designs + layouts.</div>
      </div>
    );
  }
}

export default Content;
