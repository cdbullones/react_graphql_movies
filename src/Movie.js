import React from 'react';

const Movie = (props) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
            <h5 className="card-title">{props.movie.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">by {props.movie.year}</h6>
        </div>
    </div>
);

export default Movie;