import React from 'react'

export default class App extends React.Component {
  render () {
    var url = new URL(window.location.href 
);
var c = url.searchParams.get("a");

console.log(c);
    return (
      <div>
        
Browser params {c}</div>
    )
  }
}
