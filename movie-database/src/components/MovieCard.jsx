import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <div className="w-64 flex-none border rounded-lg p-4 shadow-lg">
    <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover mb-4" />
    <h3 className="text-lg font-bold">{movie.title}</h3>
    <p className="text-gray-600 truncate">{movie.description}</p>
    <Link to={`/movies/${movie.id}`} className="text-blue-500 hover:underline mt-2 block">
      View Details
    </Link>
  </div>
);

export default MovieCard;
