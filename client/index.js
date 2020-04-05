import './style/style.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Switch>
            <Route path="/songs/new">
              <SongCreate />
            </Route>
            <Route path="/songs/:id">
              <SongDetail />
            </Route>
            <Route path="/">
              <SongList />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
