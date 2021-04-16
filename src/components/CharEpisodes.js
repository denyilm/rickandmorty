/* eslint-disable no-unused-vars */
import React from 'react'

const CharEpisodes = (props) => {

  return (
    <div id='char-main-season-container'>
      <div id='season-header-container'>
        <span id='season-name'>{`episodes / ${props.episodes.length}`}</span>
      </div>
      <div id='season-episodes-container'>
        {
          props.episodes.map(episode =>
            <div key={episode.episode} className='episode-link-container'>
              <span className='episode-pointer'>{'> '}</span>
              <span className='episode-link' id={episode.url} onClick={props.pick}>
                {`${episode.id.toString().length === 1 ? '0' + episode.id : episode.id} ${episode.name}`}
              </span>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default CharEpisodes