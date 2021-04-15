/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Switch, Route, Link, useHistory
} from 'react-router-dom'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Seasons from './components/Seasons'
import Episodes from './components/Episodes'
import Episode from './components/Episode'
import Character from './components/Character'
import getRandomQuotes from './functions/getRandomQuote'
import { IoEarth } from 'react-icons/io5'

const App = () => {
  const [episodeUrl, setEpisodeUrl] = useState('https://rickandmortyapi.com/api/episode')
  const [charUrl, setCharUrl] = useState('https://rickandmortyapi.com/api/character')
  const [episodePage, setEpisodePage] = useState(1)
  const [charPage, setCharPage] = useState(1)
  const [episodes, setEpisodes] = useState([])
  const [characters, setCharacters] = useState([])
  const [characterNames, setCharacterNames] = useState([])
  const [episodePath, setEpisodePath] = useState('/episode')
  const [characterPath, setCharacterPath] = useState('/character')
  const [episode, setEpisode] = useState({})
  const [character, setCharacter] = useState({})
  const [quote, setQuote] = useState({})
  const [showHeaderLinks, setShowHeaderLinks] = useState(false)
  const history = useHistory()

  //fetch the episodes
  useEffect(() => {
    axios
      .get(episodeUrl)
      .then(response => {
        setEpisodes(episodes.concat(response.data.results))
        if(response.data.info.next){
          setEpisodeUrl(response.data.info.next)
          setEpisodePage(episodePage+1)
        }
      })
  },[episodePage])
  //

  //
  useEffect(() => {
    axios
      .get(charUrl)
      .then(response => {
        setCharacters(characters.concat(response.data.results))
        let names = []
        response.data.results.forEach(char => {
          names.push(char.name)
        })
        setCharacterNames(characterNames.concat(names))
        if(response.data.info.next){
          setCharUrl(response.data.info.next)
          setCharPage(charPage+1)
        }
      })
  },[charPage])
  //

  //fetch an object if the request is a specific episode or character
  useEffect(() => {
    if(history.location.pathname.includes('episode/')){
      fetchObj(`https://rickandmortyapi.com/api/${history.location.pathname}`)
        .then(res => {
          setEpisodePath(history.location.pathname)
          setEpisode(res)
        })
    }

    if(history.location.pathname.includes('character')){
      fetchObj(`https://rickandmortyapi.com/api/${history.location.pathname}`)
        .then(res => {
          setCharacterPath(history.location.pathname)
          setCharacter(res)
        })
    }
  },[])
  //

  //Fetch an obj from the API
  const fetchObj = (url) => {
    let req = axios.get(url)
    return req.then(response => response.data)
  }
  //

  //get random quote
  useEffect(() => {
    let randomQuote = getRandomQuotes()
    setQuote(randomQuote)
  },[])
  //

  //
  const pickEpisode = (event) => {
    event.preventDefault()
    let pickedSpan = event.target.id
    let path = pickedSpan.split('/').slice(4,6).join('/')
    setEpisodePath(`/${path}`)
    history.push(`/${path}`)
    fetchObj(pickedSpan)
      .then(res => setEpisode(res))
  }
  //

  //
  const pickCharacter = (event) => {
    event.preventDefault()
    let pickedSpan = event.target.id
    let path = pickedSpan.split('/').slice(4,6).join('/')
    setCharacterPath(`/${path}`)
    history.push(`/${path}`)
    fetchObj(pickedSpan)
      .then(res => setCharacter(res))
  }
  //

  //
  const goTo = (event) => {
    event.preventDefault()
    setShowHeaderLinks(false)
    let path = event.target.id
    history.push(`/${path}`)
  }
  //

  //
  const handleLogo = (event) => {
    event.preventDefault()
    setShowHeaderLinks(false)
    history.push('/')
    let newRandomQuote = getRandomQuotes()
    setQuote(newRandomQuote)
  }
  //


  return (
    <div id='main-container'>
      <div id='main-header-container'>
        <div id='logo-as'>
          [adult swim]
        </div>
        <div id='header-link-nav' title='navigate'>
          <span
            onClick={() => setShowHeaderLinks(!showHeaderLinks)}
            style={{ color: showHeaderLinks ? 'lightgreen' : 'white' }}>
            <IoEarth size={25}/>
          </span>
          <div id='header-links-container' style={{ display: showHeaderLinks ? '' : 'none' }}>
            <Link className='header-link' to="/">home</Link>
            <Link className='header-link' to="/seasons">seasons</Link>
            <Link className='header-link' to="/episodes">episodes</Link>
          </div>
        </div>
      </div>
      <div id='rm-logo-container' onClick={handleLogo} title='Rick and Morty logo, to home'>
        <img src='/rick-and-morty.png' id='rm-logo'></img>
      </div>
      <div id='content-container'>
        <Switch>
          <Route path='/seasons'>
            <Seasons episodes={episodes} pick={pickEpisode}/>
          </Route>
          <Route path='/episodes'>
            <Episodes episodes={episodes} pick={pickEpisode}/>
          </Route>
          <Route path={episodePath}>
            <Episode episode={episode} charNames={characterNames} pick={pickCharacter}/>
          </Route>
          <Route path={characterPath}>
            <Character character={character}/>
          </Route>
          <Route path='/'>
            <div id='quote-container'>
              <span id='quote-quote'>{`${quote.quote}`}</span>
            </div>
            <div id='options-container'>
              <div id='options-header-container'>
                <span style={{ color: 'black' }}>{'> '}</span>
                <span id='options-header'>options</span>
              </div>
              <div className='option-link-container'>
                <span className='option-pointer'>{'> '}</span>
                <span className='option-link' onClick={goTo} id='seasons'>seasons</span>
              </div>
              <div className='option-link-container'>
                <span className='option-pointer'>{'> '}</span>
                <span className='option-link' onClick={goTo} id='episodes'>all episodes</span>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App
