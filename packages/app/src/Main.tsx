import React, { MouseEventHandler } from 'react'
import Button from '@mui/material/Button'
import logo from './logo.svg'
import './App.css'

const Main = (buttonCallback?: MouseEventHandler) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button variant="contained" onClick={buttonCallback}>
          새로 만든 버튼이에용
        </Button>
      </header>
    </div>
  )
}

export default Main
