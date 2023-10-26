import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AssignedClients from './pages/AssignedClients';
import Navbar from './components/Navbar';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import Home from './pages/Home';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Comment from './pages/Comment';
// import Profile from './pages/Profile';
// import Header from './components/Header';
// import Footer from './components/Footer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/assigned' component={AssignedClients} />
            <Route render={() => <h1 className='display-2'>Wrong page</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
