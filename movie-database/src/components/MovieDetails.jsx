import React from "react";
import { useParams } from "react-router-dom";
import movies from "../data/movies.json";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) return <div>Movie not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={movie.poster} alt={movie.title} className="w-full h-96 object-cover mb-4" />
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <p className="text-gray-600 my-4">{movie.description}</p>
      <p className="font-bold">Rating: {movie.rating}/10</p>
    </div>
  );
};

export default MovieDetails;
