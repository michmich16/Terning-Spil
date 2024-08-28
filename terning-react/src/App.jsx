import { useState, useEffect } from 'react'
import { Button } from './components/Button/Button'

import './App.scss'

function App() {

  return (
    <>
      <div className='buttonGrid'>
        <Button buttonText='Lower' />
        <Button buttonText='Six' />
        <Button buttonText='Higher' />
      </div>
    </>
  )
}

export default App
