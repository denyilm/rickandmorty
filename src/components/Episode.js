/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Episode = (props) => {
  const [episode, setEpisode] = useState()
  const [charUrls, setCharUrls] = useState()

  useEffect(() => {
    setEpisode(props.episode)
    setCharUrls(props.episode.characters)
  },[props.episode])

  const getAvatarUrl = (url) => {
    let urlArr = url.split('/')
    urlArr.splice(5,0,'avatar')
    let avatarUrl = urlArr.join('/') + '.jpeg'
    return avatarUrl
  }

  return (
    <div>
      {props.episode.name}
      {charUrls
        ?
        charUrls.map(url =>
          <div key={url.split('/').reverse()[0]} className='char-span' >
            <img className='char-img' id={url} onClick={props.pick} src={getAvatarUrl(url)} ></img>
            <span className='char-name' id={url} onClick={props.pick}>{props.charNames[url.split('/').reverse()[0]-1]}</span>
          </div>)
        :
        null}
    </div>
  )
}

export default Episode