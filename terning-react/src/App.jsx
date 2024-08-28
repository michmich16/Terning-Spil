import { useState, useEffect } from 'react'
import React from 'react';
import Game from './components/RollDiceTest/RollDiceTest';
import { Button } from './components/Button/Button';
import './App.scss'

function App() {

  return (
    <>
    <div className="App">
      <Game />
    </div>

      <div className='buttonGrid'>
        <Button buttonText='Lower' />
        <Button buttonText='Six' />
        <Button buttonText='Higher' />
      </div>
    </>
  )
}

export default App
