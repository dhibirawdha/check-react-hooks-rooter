import React from "react";
import Filter from "../Components/Filter";
import movieList from "../Components/movieList";
const Home = (props) => {
  return (
    <div>
      <Filter
        text={props.text}
        setText={props.setText}
        rating={props.rating}
        setRating={props.setRating}
      />
      <movieList
        movies={props.movies.filter(
          (movie, i) =>
            movie.title.toLowerCase().includes(props.text.toLowerCase()) &&
            movie.rating == props.rating
        )}
      />
    </div>
  );
};
export default Home;
