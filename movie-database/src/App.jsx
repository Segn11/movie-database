import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import Navbar from "./components/Navbar";
import About from "./components/About";
import AddMovie from "./components/AddMovie";
import moviesData from "./data/movies.json";


const App = () => {
  const [movies, setMovies] = useState(moviesData);

  const addMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const App = () => (
    <div className="p-6 text-center max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">WELCOME TO POPULAR MOVIES</h1>
      </div>
);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-movie" element={<AddMovie addMovie={addMovie} />} />
      </Routes>
    </Router>
  );
};

export default App;
