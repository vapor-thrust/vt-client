import React, { MouseEventHandler, useState } from 'react'
import './App.css'
import Main from './Main'
import SignIn from './SignIn'

const App = () => {
  const buttonCallback: MouseEventHandler = (e) => {
    setPage(SignIn)
  }
  const [page, setPage] = useState(Main(buttonCallback))

  return <>{page}</>
}

export default App
