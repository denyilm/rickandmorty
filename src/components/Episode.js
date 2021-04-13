/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Episode = (props) => {
  const [episode, setEpisode] = useState()

  useEffect(() => {
    props.episode.then(res => setEpisode(res))
  },[])

  return (
    <div>
      {episode ? episode.name : null}
    </div>
  )
}

export default Episode