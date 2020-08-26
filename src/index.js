import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Context from './Context'

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
  , document.getElementById('app'))
