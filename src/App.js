import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { Detail } from './pages/Detail'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Router } from '@reach/router'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />

      <Router>
        <Detail path='/detail/:detail' />
        <Home path='/' />
        <Home path='/pet/:id' />
      </Router>
    </div>
  )
}
