import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloClient, HttpLink, ApolloProvider, InMemoryCache } from '@apollo/client'
import SpaceXSearch from './components/spacex-search';

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3001/graphql' }),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={apolloClient}>
    <div className="App">
        <SpaceXSearch />
      </div>
    </ApolloProvider>
  );
}

export default App;
