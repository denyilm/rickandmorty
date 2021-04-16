/* eslint-disable no-unused-vars */
//Packages
import {
  BrowserRouter as Router,
  Switch, Route, Link, useHistory
} from 'react-router-dom'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
//Components
import Header from './components/Header'
import Logo from './components/Logo'
import Home from './components/Home'
import Seasons from './components/Seasons'
import Episodes from './components/Episodes'
import Episode from './components/Episode'
import Character from './components/Character'
//Functions
import getRandomQuotes from './functions/getRandomQuote'

const App = () => {
  const [episodesUrl, setEpisodesUrl] = useState('https://rickandmortyapi.com/api/episode')
  const [episodeId, setEpisodeId] = useState(null)
  const [charsUrl, setCharsUrl] = useState('https://rickandmortyapi.com/api/character')
  const [episodePage, setEpisodePage] = useState(1)
  const [charPage, setCharPage] = useState(1)
  const [episodes, setEpisodes] = useState([])
  const [characters, setCharacters] = useState([])
  const [characterNames, setCharacterNames] = useState([])
  const [episodePath, setEpisodePath] = useState('/episode')
  const [characterPath, setCharacterPath] = useState('/character')
  const [episode, setEpisode] = useState({})
  const [character, setCharacter] = useState({})
  const [charEpisodes, setCharEpisodes] = useState([])
  const [quote, setQuote] = useState({})
  const [showHeaderLinks, setShowHeaderLinks] = useState(false)
  const [episodesFetched, setEpisodesFetched] = useState(false)
  const [charsFetched, setCharsFetched] = useState(false)
  const history = useHistory()

  //handle goBack
  window.addEventListener('popstate',(event) => {
    event.preventDefault()
    if(history.location.pathname.includes('episode/')){
      setEpisodePath(history.location.pathname)
    }
    if(history.location.pathname.includes('character')){
      setCharacterPath(history.location.pathname)
    }
  })
  //

  //Fetch an obj from the API
  const fetchObj = (url) => {
    let req = axios.get(url)
    return req.then(response => response.data)
  }
  //

  //fetch the episodes
  useEffect(() => {
    fetchObj(episodesUrl)
      .then(data => {
        setEpisodes(episodes.concat(data.results))
        if(data.info.next){
          setEpisodesUrl(data.info.next)
          setEpisodePage(episodePage+1)
        } else {
          setEpisodesFetched(true)
        }
      })
  },[episodePage])
  //

  //fetch the characters
  useEffect(() => {
    fetchObj(charsUrl)
      .then(data => {
        setCharacters(characters.concat(data.results))
        let names = []
        data.results.forEach(char => {
          names.push(char.name)
        })
        setCharacterNames(characterNames.concat(names))
        if(data.info.next){
          setCharsUrl(data.info.next)
          setCharPage(charPage+1)
        } else {
          setCharsFetched(true)
        }
      })
  },[charPage])
  //

  //fetch an object if the request is a specific episode or character
  useEffect(() => {
    if(history.location.pathname.includes('episode/')){
      fetchObj(`https://rickandmortyapi.com/api/${history.location.pathname}`)
        .then(data => {
          setEpisodePath(history.location.pathname)
          setEpisode(data)
          setEpisodeId(data.id)
        })
    }

    if(history.location.pathname.includes('character')){
      fetchObj(`https://rickandmortyapi.com/api/${history.location.pathname}`)
        .then(data => {
          let charEpisodes = []
          data.episode.forEach(url => {
            fetchObj(url)
              .then(episode => {
                charEpisodes.push(episode)
              })
          })
          setCharEpisodes(charEpisodes)
          setCharacter(data)
          setCharacterPath(history.location.pathname)
        })
    }
  },[episodePath])
  //

  //get random quote
  useEffect(() => {
    let randomQuote = getRandomQuotes()
    setQuote(randomQuote)
  },[])
  //

  //
  const handleNav = () => setShowHeaderLinks(!showHeaderLinks)
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

  //
  const pickEpisode = (event) => {
    event.preventDefault()
    let pickedSpan = event.target.id
    let path = pickedSpan.split('/').slice(4,6).join('/')
    setEpisodePath(`/${path}`)
    fetchObj(pickedSpan)
      .then(res => {
        setEpisodeId(res.id)
        setEpisode(res)
        history.push(`/${path}`)
      })
  }
  //

  //
  const pickCharacter = (event) => {
    event.preventDefault()
    let pickedSpan = event.target.id
    let path = pickedSpan.split('/').slice(4,6).join('/')
    setCharacterPath(`/${path}`)
    fetchObj(pickedSpan)
      .then(res => {
        setCharacter(res)
        setCharEpisodes(episodes.filter(episode => episode.characters.includes(res.url)))
        history.push(`/${path}`)
      })
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
  const changeEpisodeUrl = (url, newId) => {
    let urlArr = url.split('/')
    urlArr.splice(2,1,newId)
    let newUrl = urlArr.join('/')
    return newUrl
  }
  //

  //
  const handleNextEpisode = (event) => {
    event.preventDefault()
    let url = episodePath
    if(episodeId < episodes.length){
      setEpisodeId(episodeId+1)
      url = changeEpisodeUrl(episodePath, episodeId+1)
      fetchObj(`https://rickandmortyapi.com/api/${url}`)
        .then(res => {
          setEpisodeId(res.id)
          setEpisode(res)
          history.push(`${url}`)
          setEpisodePath(`${url}`)
        })
    }
  }
  //

  //
  const handlePreviousEpisode = (event) => {
    event.preventDefault()
    let url = episodePath
    if(episodeId > 1){
      setEpisodeId(episodeId-1)
      url = changeEpisodeUrl(episodePath, episodeId-1)
      fetchObj(`https://rickandmortyapi.com/api/${url}`)
        .then(res => {
          setEpisodeId(res.id)
          setEpisode(res)
          history.push(`${url}`)
          setEpisodePath(`${url}`)
        })
    }
  }
  //


  return (
    <div id='main-container'>
      <Header handleNav={handleNav} showHeaderLinks={showHeaderLinks}/>
      <Logo handleLogo={handleLogo}/>
      <div id='content-container'>
        <Switch>
          <Route path='/seasons'>
            <Seasons episodes={episodes} pick={pickEpisode}/>
          </Route>
          <Route path='/episodes'>
            <Episodes episodes={episodes} pick={pickEpisode}/>
          </Route>
          <Route path={episodePath}>
            <Episode
              episode={episode}
              charNames={characterNames}
              pick={pickCharacter}
              handleNext={handleNextEpisode}
              handlePrevious={handlePreviousEpisode}
              goTo={goTo}
            />
          </Route>
          <Route path={characterPath}>
            <Character character={character} episodes={charEpisodes} pickEpisode={pickEpisode}/>
          </Route>
          <Route path='/'>
            <Home
              quote={quote}
              goTo={goTo}
              fetched={episodesFetched && charsFetched}
            />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App
