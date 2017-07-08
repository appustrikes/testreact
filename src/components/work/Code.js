import React from 'react'
import { render } from 'react-dom'
import { PROJECTS } from '../../content/projects'
import Project from './Project'



export default class Code extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = "Work|Code"
  }

  renderProject(project, index) {
    return (
      <Project key={index}
              content={project.content}
              images={project.images}
              name={project.name}
              subtitle={project.subtitle}
              tools={project.tools}
              url={project.url} />
    )
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="">
          {PROJECTS.map(::this.renderProject)}
        </div>
      </div>
    )
  }
}
