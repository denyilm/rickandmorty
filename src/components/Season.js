/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Episode from './Episode'
import axios from 'axios'

const Season = (props) => {

  //Fetch episode from the API
  const fetchEpisode = (url) => {
    let req = axios.get(url)
    return req.then(response => response.data)
  }
  //

  return (
    <div>
      <h2>{props.name.split('_').join(' ')}</h2>
      {
        props.episodes.map(episode =>
          <div key={episode.episode}>
            <Link to={`/${props.name}/${episode.episode.substring(3,6)}`}>{episode.name}</Link>
            <Switch>
              <Route path={`/${props.name}/${episode.episode.substring(3,6)}`}>
                <Episode episode={fetchEpisode(episode.url)}/>
              </Route>
            </Switch>
          </div>
        )
      }
    </div>
  )
}

export default Season