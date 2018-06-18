import React, { Component } from 'react';
import './footer.css';

import FooterButton from './footer-button';
import wireframe from '../../images/footer-wireframe.png';
import copywriting from '../../images/footer-copywriting.png';
import branding from '../../images/footer-branding.png';
import analytics from '../../images/footer-analytics.png';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <FooterButton
          image={wireframe}
          text={'WIREFRAMES'}
          onPress={() => this.props.onOpenModal(0)}
        />
        <FooterButton
          image={copywriting}
          text={'COPYWRITING'}
          onPress={() => this.props.onOpenModal(1)}
        />
        <FooterButton
          image={branding}
          text={'BRAND DESIGN'}
          onPress={() => this.props.onOpenModal(2)}
        />
        <FooterButton
          image={analytics}
          text={'ANALYTICS & KPIs'}
          onPress={() => this.props.onOpenModal(3)}
        />
      </div>
    );
  }
}

export default Footer;
