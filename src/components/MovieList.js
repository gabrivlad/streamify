import React from "react";
import { Card } from "react-bootstrap";
import MovieDetailsItem from "./MovieDetailsItem";

const MovieList = ({ movies, selectedMovie, handleMovieClick }) => {
  return (
    <div className="movie-list" style={{ marginTop: "50px" }}>
      <h2>{selectedMovie ? null : "Movies"}</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {selectedMovie ? (
          <MovieDetailsItem movie={selectedMovie} />
        ) : (
          movies.map((movie) => (
            <Card
              style={{ width: "300px", marginBottom: "20px" }}
              key={movie.imdbID}
              onClick={() => handleMovieClick(movie)}
            >
              <Card.Img
                variant="top"
                src={movie.Poster}
                alt={movie.Title}
                style={{ height: "300px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>Year: {movie.Year}</Card.Text>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieList;
