import React, { Component } from 'react';

import './App.css';

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Modal from './components/modal';

const modalTitles = [
  "Storyboards and wireframes",
  "Copywriting and CTA's",
  "Branding and Design",
  "Engagement Analytics & KPIs"
];
const modalTexts = [
  `Before diving into the pretty stuff, I like to layout content components and
   CTA’s to allow some structure for the upcoming design to rely on.`,
  `Playing with words is a hobby of mine. I believe that understanding
which acronyms and industry jargons are popular among the target
demographics is key to creating quality copy.In the english language 
alone, I can speak to an older mature audience in industry jargon,
while also relating to the teeny bopper crowd, with the right emoticons,
  of course.`,
  `I approach design through three key elements, Typography, Color,
and Space. I combine these elements to create a rich, attractive
message in as little space as possible.`,
  `Like many things in life, It's not all about looks. Conversion rates and KPI's
are much better measurements for effectiveness than aesthetic opinion.`
];

function importAll(r) {
  return r.keys().map(r);
}

const wireframes = importAll(require.context('./images/wireframes', false, /\.(png|jpe?g|svg)$/));
const branding = importAll(require.context('./images/branding', false, /\.(png|jpe?g|svg)$/));
const contentcopy = importAll(require.context('./images/contentcopy', false, /\.(png|jpe?g|svg)$/));
const analytics = importAll(require.context('./images/analytics', false, /\.(png|jpe?g|svg)$/));
const images = [wireframes, branding, contentcopy, analytics];


class App extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      index: 0
    };
  }

  openModal(idx) {
    this.setState({
      showModal: true,
      index: idx
    });
  }

  endModal() {
    this.setState({
      showModal: false,
    })
  }

  render() {
    return (
      <div className='app'>
        <div className='app-header'>
          <Header />
        </div>

        <div className='app-content'>
          <Content />
        </div>

        <Footer
          onOpenModal={this.openModal.bind(this)}
        />

        <Modal
          hide={!this.state.showModal}
          endModal={this.endModal.bind(this)}
          title={modalTitles[this.state.index]}
          text={modalTexts[this.state.index]}
          images={images[this.state.index]}
        />
      </div>
    );
  }
}

export default App;
