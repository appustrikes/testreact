import React from 'react'
import { render } from 'react-dom'
import VisibilitySensor from 'react-visibility-sensor'

// A Block has a background image and a caption text in the center
export default class Block extends React.Component {
  static propTypes = {
    background: React.PropTypes.string,
    caption: React.PropTypes.string
  }
  constructor(props) {
    super(props);

    this.state = {
      isVisibleClass: ''
    }
  }

  // a callback for VisibilitySensor that determines if this Block is visible or not
  // and then set this.state.isVisibleClass to either '' or 'is-visible'
  onChange(isVisible) {
    const isVisibleClass = isVisible ? 'is-visible' : '';
    // only change the state if the value in there is different from the new one
    if (this.state.isVisibleClass != isVisibleClass) {
        this.setState({isVisibleClass: isVisibleClass});
    }
  }

  // render <Block /> component
  render () {
    return (
      <div className={`cover block ${this.state.isVisibleClass}`}
           style={{'backgroundImage': `url(${this.props.background})`}}>
        <div className="text-center">
          <h4 className="caption">{this.props.caption}</h4>
        </div>
        <VisibilitySensor onChange={::this.onChange}/>
      </div>
    )
  }
}
