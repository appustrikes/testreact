import React from 'react'
import { render } from 'react-dom'

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    if (event.target.name == 'name') {
      this.setState({name: event.target.value});
    } else if (event.target.name == 'email') {
      this.setState({email: event.target.value});
    } else if (event.target.name == 'subject') {
      this.setState({subject: event.target.value});
    } else if (event.target.name == 'message') {
      this.setState({message: event.target.value});
    }
  }

  handleSubmit(event) {
    console.log(this.state);
    $.ajax({
      type: 'get',
      url: '/email',
      query: this.state,
      dataType: 'json',
      cache: false,
      success: (data) => {
        console.log(data);
      },
      error: (xhr, status, err) => {
        console.error(status, err.toString());
      }
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Subject:
            <input type="text" name="subject" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Message:
            <textarea name="message" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
