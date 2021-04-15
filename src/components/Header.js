/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { IoEarth } from 'react-icons/io5'

const Header = (props) => {
  return (
    <div id='main-header-container'>
      <div id='logo-as'>
          [adult swim]
      </div>
      <div id='header-link-nav' title='navigate'>
        <span
          onClick={props.handleNav}
          style={{ color: props.showHeaderLinks ? 'lightgreen' : 'white' }}>
          <IoEarth size={25}/>
        </span>
        <div id='header-links-container' style={{ display: props.showHeaderLinks ? '' : 'none' }}>
          <Link className='header-link' to="/">home</Link>
          <Link className='header-link' to="/seasons">seasons</Link>
          <Link className='header-link' to="/episodes">episodes</Link>
        </div>
      </div>
    </div>
  )
}

export default Header