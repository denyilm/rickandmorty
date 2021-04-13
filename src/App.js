/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Season from './components/Season'


const App = () => {
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/episode')
  const [page, setPage] = useState(1)
  const [episodesReady, setEpisodesReady] = useState(false)
  const [episodes, setEpisodes] = useState([])
  const [seasons, setSeasons] = useState({})
  const [hideLinks, setHideLinks] = useState(false)

  //fetch the episodes
  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setEpisodes(episodes.concat(response.data.results))
        if(response.data.info.next){
          setUrl(response.data.info.next)
          setPage(page+1)
        }
      })
  },[page])
  //

  const style = {
    padding: 5,
    fontFamily: 'monospace',
    fontSize: '14px'
  }

  const seasonLinks = {
    display: hideLinks ? 'none' : ''
  }

  const homeLink = {
    display: hideLinks ? '' : 'none'
  }

  return (
    <Router>
      <h1>Rick and Morty</h1>
      <div>
        <div id='season-links-wrapper' style={seasonLinks}>
          <Link style={style} onClick={() => setHideLinks(true)} to='/season_1'>Season 1</Link>
          <br></br>
          <Link style={style} onClick={() => setHideLinks(true)} to='/season_2'>Season 2</Link>
          <br></br>
          <Link style={style} onClick={() => setHideLinks(true)} to='/season_3'>Season 3</Link>
          <br></br>
          <Link style={style} onClick={() => setHideLinks(true)} to='/season_4'>Season 4</Link>
        </div>
        <div id='home-link-wrapper' style={homeLink}>
          <Link style={style} onClick={() => setHideLinks(false)} to="/">home</Link>
        </div>
      </div>
      <Switch>
        <Route path='/season_1'>
          <Season name={'season_1'} episodes={episodes.slice(0,11)}/>
        </Route>
        <Route path='/season_2'>
          <Season name={'season_2'} episodes={episodes.slice(11,21)}/>
        </Route>
        <Route path='/season_3'>
          <Season name={'season_3'} episodes={episodes.slice(21,31)}/>
        </Route>
        <Route path='/season_4'>
          <Season name={'season_4'} episodes={episodes.slice(31,41)}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
