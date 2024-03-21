// MovieDetailsItem.js
import React from "react";
import { Card } from "react-bootstrap";

const MovieDetailsItem = ({ movie }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
          Year: {movie.Year}
          <br />
          Type: {movie.Type}
          <br />
          imdbID: {movie.imdbID}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieDetailsItem;
