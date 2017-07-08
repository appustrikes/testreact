import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

import { ABOUT } from '../content/about'

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = "About"
  }

  renderExperience(item, index) {
    return (<li key={index}><a href={item.url} target="_blank">
              <img src={item.img} /> </a>
              <span className="job-title">{item.name}</span>
              <br />
              <span className="job-subtitle">{item.job}</span>
              <br />
              <span className="job-subtitle">{item.duration}</span>
            </li>)
  }
  renderSkill(item, index) {
    return (<li key={index}>{item}</li>)
  }

  render() {
    return (
      <div className="container container-body">
        <h2>About</h2>
        <div className="content about">
          <div className="col-md-8">
            <h4>Hey!</h4>
            <p>My name is Anh (but people just call me Anya) and
            I just graduated from Northeastern University and now I am
            a Frontend Developer at <a href="https://upperquad.com/" target="_blank">Upperquad</a>.</p>
            <br />
            <h4>What do I do?</h4>
            <p>I am a Software Engineer who has worked at a digital agency,
            fintech industry, and also academia where I teach students in functional and object oriented
            programmings. For more information you can check out my <span className="bold">
            <a href="http://www.linkedin.com/in/anyatran/" target="_blank">Linkedin</a></span> and <span className="bold">
            <a href="/resume">Resume</a></span>.</p>

            <br />
            <p>On my free time you can find me doing some art work, such as {<Link to="/work/drawings">drawing</Link>},
            making {<Link to="/work/music">music</Link>}, crafting. I also love exploring new places
            and you can follow my journey on my <span className="bold"><a href="https://instagram.com/anya_tran/"
            target="_blank">Instagram</a></span>.</p>

            <br />
            <h4>Experience</h4>
            <ul className="experiences">
              {ABOUT.experiences.map(::this.renderExperience)}
            </ul>

            <br />
            <h4>Skills</h4>
            <ul className="skills">
              {ABOUT.skills.map(::this.renderSkill)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
