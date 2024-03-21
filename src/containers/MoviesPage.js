import React, { Fragment, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import MovieService from "../components/MovieService";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const results = await MovieService.searchMovies(query);
      setMovies(results || []);
      setSelectedMovie(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <>
      <Row className="mt-3">
        <Col xs={12} className="text-center">
          <h1>Movie App</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>{<SearchBar onSearch={searchMovies} />}</Col>
      </Row>
      <Row className="mt-3">
        <Col>
          {loading && <p>Loading...</p>}
          {error && <Alert variant="danger">{error}</Alert>}
          {movies.length > 0 && (
            <MovieList
              movies={movies}
              selectedMovie={selectedMovie}
              handleMovieClick={handleMovieClick}
            />
          )}
        </Col>
      </Row>
    </>
  );
};

export default MoviesPage;
