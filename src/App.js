import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import Context from './Context'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />

      <Router>
        <Detail path='/detail/:id' />
        <Home path='/' />
        <Home path='/pet/:id' />
      </Router>

      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? (
                <Router>
                  <Favs path='/favs' />
                  <User path='/user' />
                </Router>)
              : (
                <Router>
                  <NotRegisteredUser path='/favs' />
                  <NotRegisteredUser path='/user' />
                </Router>)

        }
      </Context.Consumer>
      <NavBar />
    </div>
  )
}
