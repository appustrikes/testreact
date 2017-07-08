import React from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import WorldMap from '../assets/images/world_map.jpg'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instagram: []
    };
  }
  componentDidMount() {
    document.title = "ANYA";
    axios.get('/instagram')
      .then(res => {
        this.setState({instagram: res.data.user.media.nodes});
      });
  }

  renderCaption(list) {
    const captions = list.map((image) => {
      return image.caption;
    });
    // console.log(captions);
    return Typed.new('.captions', {
        strings: captions,
        typeSpeed: 50,
        loop: true
      });
  }

  renderFeed(image) {
    return (<img key={image.id} src={image.display_src} className="instagram"/>);
  }

  render() {
    return (
      <div className="container container-body home">
        <h2>A little bit of Anyaism..</h2>
        <div>
          <div className="col-md-8 ">
            <p className="captions"> </p>
            {this.renderCaption(this.state.instagram)}
          </div>
          <div className="col-md-4">
            <img src={WorldMap} className="map"/>
            <p>
              <span className="title">CURRENTLY LOCATED: </span>
                San Francisco, CA
            </p>
            {this.state.instagram.map(::this.renderFeed)}
          </div>
        </div>
      </div>
    )
  }
}
