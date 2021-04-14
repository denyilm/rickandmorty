/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Character = (props) => {

  return (
    <div className='main-char-container'>
      <div>
        <img src={props.character.image}></img>
      </div>
      <div className='char-info-container'>
        <span className='char-info'>name: {props.character.name}</span>
        <span className='char-info'>status: {props.character.status}</span>
        <span className='char-info'>species: {props.character.species}</span>
        <span className='char-info'>type: {props.character.type}</span>
        <span className='char-info'>gender: {props.character.gender}</span>
        <span className='char-info'>origin: {props.character.origin ?
          props.character.origin.name :
          'null'}
        </span>
        <span className='char-info'>location: {props.character.location ?
          props.character.location.name :
          'null'}
        </span>
      </div>
    </div>
  )
}

export default Character