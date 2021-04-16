/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BsFillCircleFill } from 'react-icons/bs'
import { GiAlienBug } from 'react-icons/gi'
import { IoHomeSharp, IoMaleFemale, IoPlanetSharp } from 'react-icons/io5'

const Character = (props) => {

  return (
    <div>
      {
        Object.keys(props.character).length === 0
          ?
          <div>...loading</div>
          :
          <div id='main-char-container'>
            <div id='char-img-status-container'>
              <div id='char-img-container'>
                <img id='char-img' src={props.character.image}></img>
              </div>
              <span id='char-status-span' title={`Status: ${props.character.status}`}>
                {props.character.status !== 'unknown'
                  ?
                  <BsFillCircleFill
                    style={
                      { color: props.character.status === 'Alive' ? 'limegreen' : 'red',
                        border: 'solid 1px white',
                        borderRadius: '100%' }} size={27}/>
                  :
                  <BsFillCircleFill
                    style={
                      { color: 'lightgrey' ,
                        border: 'solid 1px white',
                        borderRadius: '100%' }} size={27}/>}
              </span>
            </div>
            <span id='char-name-span' title='character name'>{props.character.name}</span>
            <div className='char-info-container'>
              <div className='char-info'>
                <span className='char-info-icon-container' title='species'>
                  <GiAlienBug/>
                </span>
                <span>{` ${props.character.species}`}</span>
              </div>
              <div className='char-info'>
                <span className='char-info-icon-container' title='gender'>
                  <IoMaleFemale/>
                </span>
                <span>{` ${props.character.gender}`}</span>
              </div>
              <div className='char-info'>
                <span className='char-info-icon-container' title='last seen at'>
                  <IoPlanetSharp/>
                </span>
                <span>
                  {props.character.origin ?
                    props.character.origin.name :
                    'null'}
                </span>
              </div>
              <div className='char-info'>
                <span className='char-info-icon-container' title='origin'>
                  <IoHomeSharp/>
                </span>
                <span>
                  {props.character.origin ?
                    props.character.origin.name :
                    'null'}
                </span>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default Character