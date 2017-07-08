import React from 'react'
import { render } from 'react-dom'
// the iframe is shifting the view in Work
export default class Music extends React.Component {
  componentDidMount() {
    document.title = "Work|Music"
  }

  render() {
    return (
      <div className="container container-body">
        <p>I have graduated from a Music School in Moscow learning piano, classical and jazz music.
        Occasionally I perform in events and collaborate with friends. Here are some tracks that
        I have recorded:</p>
        <iframe height="450"
        scrolling="no" frameBorder="no"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/154096154&amp;theme_color=b9929f&amp;color=b9929f&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false">
        </iframe>
        {//<p>Even though I have been mainly focusing on piano music, I am gradually shifting
        //towards electronic music. Currently I am self-learning how to do music
        //engineering and producing, and hopefu</p>
        }
      </div>
    )
  }
}
