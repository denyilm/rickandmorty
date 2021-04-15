import React from 'react'

const Logo = (props) => {
  return (
    <div id='rm-logo-container' onClick={props.handleLogo} title='Rick and Morty logo, to home'>
      <img src='/rick-and-morty.png' id='rm-logo'></img>
    </div>
  )
}

export default Logo