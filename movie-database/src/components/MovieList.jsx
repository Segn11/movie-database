import React, { useRef } from "react";
import movies from "../data/movies.json";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust as needed
      scrollRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Movies</h2>
      <div className="flex items-center gap-4">
        <button
          onClick={() => handleScroll("prev")}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          ◀
        </button>
        <div
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory justify-center w-full max-w-5xl"
          ref={scrollRef}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="snap-center shrink-0">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
        <button
          onClick={() => handleScroll("next")}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default MovieList;
