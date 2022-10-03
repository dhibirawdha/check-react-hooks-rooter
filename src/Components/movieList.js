import React from "react";
import movieCard from "./movieCard";
const MovieList = ({ movies }) => {
  return (
    <div
      className="movies-list"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {movies.map((movies, i) => (
        <movieCard key={i} movie={movies} />
      ))}
    </div>
  );
};

export default movieList;
