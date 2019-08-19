import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Movie from './Movie';


const Movies = () => (
  <Query
    query={gql`
      {
        movies{
            id
            title
            year
          }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.movies.map((currentMovie) => (
          <Movie movie={currentMovie} />
        ));
    }}
  </Query>
);

export default Movies;