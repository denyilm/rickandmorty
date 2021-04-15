/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Episode = (props) => {
  const [episode, setEpisode] = useState({})
  const [charUrls, setCharUrls] = useState([])
  const [id, setId] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    setEpisode(props.episode)
    setCharUrls(props.episode.characters)
    setId(props.episode.id)
    setUrl(props.episode.url)
  },[props.episode])

  const getAvatarUrl = (url) => {
    let urlArr = url.split('/')
    urlArr.splice(5,0,'avatar')
    let avatarUrl = urlArr.join('/') + '.jpeg'
    return avatarUrl
  }

  return (
    <div id='main-episode-container'>
      <div id='main-episode-info-container'>
        <div id='episode-header-container'>
          <span onClick={props.handlePrevious} className='next-prev-button'>{'< '}</span>
          <span id='episode-header'>
            {`Season ${props.episode.episode ? props.episode.episode.substring(1,3) : null} `}
            {`/ Episode ${props.episode.episode ? props.episode.episode.substring(4,6) : null}`}</span>
          <span onClick={props.handleNext} className='next-prev-button'>{' >'}</span>
        </div>
        <div id='episode-info-container'>
          <div className='episode-info'>
            <span id='episode-name-span'>{props.episode.name}</span>
          </div>
          <div>
            <span>{props.episode.air_date}</span>
          </div>
        </div>
      </div>
      <div id='main-mini-char-container'>
        <div id='mini-char-header-container'>
          <span id='mini-char-header'>characters</span>
        </div>
        <div id='mini-char-container'>
          {charUrls
            ?
            charUrls.map(url =>
              <div key={url.split('/').reverse()[0]} className='char-span' id={url} onClick={props.pick}>
                <div className='char-mini-img-container'>
                  <img className='mini-char-img' id={url} onClick={props.pick} src={getAvatarUrl(url)} ></img>
                </div>
                <div className='char-mini-info-container'>
                  <span className='char-name' id={url} onClick={props.pick}>{props.charNames[url.split('/').reverse()[0]-1]}</span>
                </div>
              </div>)
            :
            null}
        </div>
      </div>
    </div>
  )
}

export default Episode