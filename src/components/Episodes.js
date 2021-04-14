/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

const Episodes = (props) => {

  return (
    <div>
      <h2>{props.name}</h2>
      {
        props.episodes.map(episode =>
          <div key={episode.episode}>
            <span id={episode.url} onClick={props.pick}>{episode.name}</span>
          </div>
        )
      }
    </div>
  )
}

export default Episodes