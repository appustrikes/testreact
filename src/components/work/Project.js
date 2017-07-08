import React from 'react'
import { render } from 'react-dom'

export default class Project extends React.Component {
  static propTypes = {
    content: React.PropTypes.array,
    images: React.PropTypes.array,
    name: React.PropTypes.string,
    subtitle: React.PropTypes.string,
    tools: React.PropTypes.array,
    url: React.PropTypes.string
  }
  constructor(props) {
    super(props);
  }

  renderImage(image, index) {
    return (<img key={index} src={image} />);

  }

  renderTag(tag, index) {
    return (<li key={index} className="tag">#{tag}</li>);
  }

  render() {
    return (
      <div className="container project" id={this.props.name}>
        <h3>{this.props.name}</h3>
        <h4>{this.props.subtitle}</h4>
        {this.props.images.map(::this.renderImage)}
        <p>{this.props.content}  </p>
        <ul>
          {this.props.tools.map(::this.renderTag)}
        </ul>
      </div>
    )
  }
}
