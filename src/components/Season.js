/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

const Season = (props) => {

  return (
    <div id='main-season-container'>
      <div id='season-header-container'>
        <span id='season-name'>{`${props.name}`}</span>
      </div>
      <div id='season-episodes-container'>
        {
          props.episodes.map(episode =>
            <div key={episode.episode} className='episode-link-container'>
              <span className='episode-pointer'>{'> '}</span>
              <span className='episode-link' id={episode.url} onClick={props.pick}>{`${episode.episode.substring(4,6)} ${episode.name}`}</span>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Season