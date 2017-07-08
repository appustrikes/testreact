import React from 'react'
import { render } from 'react-dom'
import Form from './Form'
export default class Contact extends React.Component {
  componentDidMount() {
    document.title = "Contact"
  }

  render() {
    return (
      <div className="container container-body">
        <h2>Contact</h2>
        <div className="content">
          {//<Form />
          }
          <p><a href="mailto:panhtran249@gmail.com">Email me</a> or find me on <a href="https://github.com/anyatran/" target="_blank">Github
          </a>, <a href="http://www.linkedin.com/in/anyatran/" target="_blank">LinkedIn</a>,
          or <a href="https://instagram.com/anya_tran/" target="_blank">Instagram</a>.
          </p>
        </div>
      </div>
    )
  }
}
