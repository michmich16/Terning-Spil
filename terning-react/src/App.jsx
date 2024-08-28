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
      <Button />
    </>
  )
}

export default App
