import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'


export default class Work extends React.Component {
  componentDidMount() {
    document.title = "Work"
  }

  render() {
    return (
      <div>
        <div className="container sub-nav">
          <h2 className="">Work</h2>
          <ul>
            <Link to="/work/code" activeClassName="active">code</Link>
            <Link to="/work/drawings" activeClassName="active">drawings</Link>
            <Link to="/work/music" activeClassName="active">music</Link>
          </ul>

        </div>
        {this.props.children}
      </div>
    )
  }
}
