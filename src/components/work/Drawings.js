import React from 'react'
import { render } from 'react-dom'
import { DRAWINGS } from '../../content/drawings'

export default class Drawings extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.title = "Work|Drawings"
  }

  renderDrawing(image, index) {
    return (
      <div className="col-md-4" key={index}><img className="drawing" src={image} /></div>
    );
  }

  render() {
    console.log(DRAWINGS);
    return (
      <div className="container">
        {DRAWINGS.map(::this.renderDrawing)}
      </div>
    )
  }
}
