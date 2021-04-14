/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Season from './Season'

const Seasons = (props) => {
  const [hideLinks, setHideLinks] = useState(false)
  const [hover, setHover] = useState(false)

  return (
    <div>
      <div id='season-links-wrapper'>
        <div id='season-links-container'>
          <div id='seasons-header-container'>
            <span style={{ color: 'black' }}>{'> '}</span>
            <span id='seasons-header'>{' Seasons '}</span>
          </div>
          <div className='season-link-container'>
            <span className='season-pointer'>{'> '}</span>
            <Link className='season-link' to='/seasons/1'>Season 01</Link>
          </div>
          <div className='season-link-container'>
            <span className='season-pointer'>{'> '}</span>
            <Link className='season-link' to='/seasons/2'>Season 02</Link>
          </div>
          <div className='season-link-container'>
            <span className='season-pointer'>{'> '}</span>
            <Link className='season-link' to='/seasons/3'>Season 03</Link>
          </div>
          <div className='season-link-container'>
            <span className='season-pointer'>{'> '}</span>
            <Link className='season-link' to='/seasons/4'>Season 04</Link>
          </div>
        </div>
      </div>
      <Switch>
        <Route path='/seasons/1'>
          <Season name={'Season 01'} episodes={props.episodes.slice(0,11)} pick={props.pick}/>
        </Route>
        <Route path='/seasons/2'>
          <Season name={'Season 02'} episodes={props.episodes.slice(11,21)} pick={props.pick}/>
        </Route>
        <Route path='/seasons/3'>
          <Season name={'Season 03'} episodes={props.episodes.slice(21,31)} pick={props.pick}/>
        </Route>
        <Route path='/seasons/4'>
          <Season name={'Season 04'} episodes={props.episodes.slice(31,41)} pick={props.pick}/>
        </Route>
      </Switch>
    </div>
  )
}

export default Seasons