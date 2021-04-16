/* eslint-disable no-unused-vars */
import React from 'react'

const Home = (props) => {

  return (
    <div>
      {
        !props.fetched
          ?
          <div>...loading</div>
          :
          <div>
            <div id='quote-container' title={`quote by ${props.quote.character}`}>
              <span id='quote-quote'>{`${props.quote.quote}`}</span>
            </div>
            <div id='options-container'>
              <div id='options-header-container'>
                <span style={{ color: 'black' }}>{'> '}</span>
                <span id='options-header' title='options'>options</span>
              </div>
              <div className='option-link-container'>
                <span className='option-pointer'>{'> '}</span>
                <span className='option-link' onClick={props.goTo} id='seasons' title='go to seasons'>seasons</span>
              </div>
              <div className='option-link-container'>
                <span className='option-pointer'>{'> '}</span>
                <span className='option-link' onClick={props.goTo} id='episodes' title='go to episodes'>all episodes</span>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default Home