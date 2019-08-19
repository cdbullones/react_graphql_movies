import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Movies from './Movies';

const client = new ApolloClient({
  uri: "https://django-graphql-movies.herokuapp.com/graphql/"
});


const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="http://localhost:3000/">React and GraphQL - Movies Application</a>
      </nav>
      <div>
        <Movies />
      </div>
    </div>
  </ApolloProvider>
);

export default App;
