import { useState, useEffect } from 'react'
import React from 'react';
import Game from './components/Game/Game';
import  Button  from './components/Buttons/Buttons';
import './App.scss'

function App() {

  return (
    <>
      <div className="App">
        <Game />
      </div>
    </>
  )
}

export default App
