import React from 'react'
import { browserHistory, Link } from 'react-router'
import Instagram from '../assets/icons/instagram.svg'
import Music from '../assets/icons/music.svg'
import Github from '../assets/icons/github.svg'
import Twitter from '../assets/icons/twitter.svg'

export default class SocialMedia extends React.Component {

  // renderIcons() {
  //   return this.icons.map((icon, ind) => {
  //     return (<a href="https://soundcloud.com/anya_tran/" target="_blank">
  //               <img src="/public/icons/music.svg" />
  //             </a>)
  //   })
  // }
  render() {
    return(
    <div className="social-media">
      <ul className="icons">
        <a href="https://instagram.com/anya_tran/" target="_blank">
          <img src={Instagram} />
        </a>
        <a href="https://soundcloud.com/anya_tran/" target="_blank">
          <img src={Music} />
        </a>
        <a href="https://github.com/anyatran/" target="_blank">
          <img src={Github} style={{width: '75%', margin: 'auto'}}/>
        </a>
        <a href="https://twitter.com/anya_tran/" target="_blank">
          <img src={Twitter} style={{width: '80%', margin: 'auto'}}/>
        </a>
        {/*<a href="" className="glyphicon glyphicon-menu-up"> </a>*/}


      </ul>
    </div>
  )}
}
