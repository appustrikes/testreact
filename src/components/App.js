import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import Navigation from './Navigation'
import SocialMedia from './SocialMedia'
export default class App extends React.Component {
  render () {
    return (
      <div className="container-fluid main">
        <div className="nav-bar">
          <span className="header">
            <h1><a onClick={() => browserHistory.push('') }>ANYA TRAN</a></h1>
          </span>
          <Navigation />
        </div>
        <div className="row">
          {this.props.children}
        <SocialMedia />
        </div>
        <div className="footer">
          <div className="container">
            <p>© Anya Tran 2017. Site is still under construction.</p>
          </div>
        </div>
      </div>
    )
  }
}
