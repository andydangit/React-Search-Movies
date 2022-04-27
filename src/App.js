import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./Search.svg";

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

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL} &s=${title}`);
    const data = await res.json();

    console.log(data.Search);
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
      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img
              src={
                movie1.Poster !== "N/A"
                  ? movie1.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie1.Title}
            />
          </div>
          <div>
            <span> {movie1.Type} </span>
            <h3> {movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
