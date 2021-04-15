/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

const Home = (props) => {

  return (
    <div>
      <div id='quote-container'>
        <span id='quote-quote'>{`${props.quote.quote}`}</span>
      </div>
      <div id='options-container'>
        <div id='options-header-container'>
          <span style={{ color: 'black' }}>{'> '}</span>
          <span id='options-header'>options</span>
        </div>
        <div className='option-link-container'>
          <span className='option-pointer'>{'> '}</span>
          <span className='option-link' onClick={props.goTo} id='seasons'>seasons</span>
        </div>
        <div className='option-link-container'>
          <span className='option-pointer'>{'> '}</span>
          <span className='option-link' onClick={props.goTo} id='episodes'>all episodes</span>
        </div>
      </div>
    </div>
  )
}

export default Home