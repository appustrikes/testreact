import React from 'react'
import { render } from 'react-dom'

// A Hero is the first block of a single-page website that has a title and a subtitle
export default class Hero extends React.Component {
  static propTypes = {
    subtitle: React.PropTypes.string,
    title: React.PropTypes.string
  }

  // render the <Hero /> component
  render () {
    return (
      <div className="cover hero">
        <div className="text-center">
          <h1>{this.props.title}</h1>
          <h3>{this.props.subtitle}</h3>
        </div>
      </div>
    )
  }
}
