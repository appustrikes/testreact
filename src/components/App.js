import React from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import Block from './Block'
import Hero from './Hero'

// number of blocks after the hero
const numberOfBlocks = 6;

// An App is a single web page that contains a Hero, followed by 6 Blocks
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instagram: new Array(numberOfBlocks).fill('')
    };
  }

  // react method that is called after the component is rendered
  componentDidMount() {
    this.getInstagram();
  }

  // get request to /instagram
  getInstagram() {
    return axios.get('/instagram')
      .then(res => {
        let instagram = [];
        // getting first 6 images since we don't need any more
        res.data.data.forEach(post => {
          if (instagram.length < numberOfBlocks) {
            instagram = instagram.concat(post.images.standard_resolution.url);
          } else {
            return false;
          }
        });

        this.setState({instagram: instagram});
      })
      .catch(error => {
        console.log(error);
      });
  }

  // render a <Block /> with a given imageUrl as a background image, a caption
  // in the center of a Block, and a key as a unique number that is required
  // by react
  renderBlock(imgUrl, index) {
    return (
      <Block background={imgUrl}
             caption="FPO"
             key={index} />
    );
  }

  // render <App /> component
  render () {
    return (
      <div className="app">
        <Hero subtitle="I'm a subtitle" title="I'm a title"/>
        {this.state.instagram.map(::this.renderBlock)}
      </div>
    );
  }
}
