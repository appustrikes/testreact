import React from 'react'
import { browserHistory, Link } from 'react-router'
import NavLink from './NavLink'
export default class Navigation extends React.Component {
  render() {
    return(
    <div className="nav-list">
      <ul className="main-nav">
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/work" activeClassName="active">Work</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      </ul>
    </div>
  )}
}
