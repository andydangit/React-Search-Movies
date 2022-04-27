import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import SearchIcon from "./Search.svg";

import "./App.css";

function App() {
  const API_URL = "http://www.omdbapi.com?apikey=b8d1252e";

  // static data temp
  const movie1 = {
    Title: "Superman/Batman: Public Enemies",
    Year: "2009",
    imdbID: "tt1398941",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDc5NTFiMzgtZWJiOS00N2M1LWJmOGYtZmNjMzFhMzcxZjRiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  };

  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL} &s=${title}`);
    const data = await res.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Superman");
  }, []);

  return (
    <div className="app">
      <h1> Movies Database </h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />

        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          <MovieCard movie1={movie1} />
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
