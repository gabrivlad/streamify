import axios from "axios";

const OMDB_API_KEY = process.env.REACT_APP_API_KEY;

const MovieService = {
  async searchMovies(query) {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`
      );
      return response.data.Search;
    } catch (error) {
      throw new Error("Failed to fetch movies");
    }
  },
};

export default MovieService;
