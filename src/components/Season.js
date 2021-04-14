/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

const Season = (props) => {

  return (
    <div id='main-season-container'>
      <div id='season-header-container'>
        <span>------------------- </span>
        <span>{`<${props.name}/>`}</span>
      </div>
      <div id='season-episodes-container'>
        {
          props.episodes.map(episode =>
            <div key={episode.episode}>
              <span className='episode-pointer'>{'> '}</span>
              <span className='season-name' id={episode.url} onClick={props.pick}>{episode.name}</span>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Season