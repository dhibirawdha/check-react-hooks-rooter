import "./App.css";
import movieList from "./Components/movieList";
import Filter from "./Components/Filter";
import { useState } from "react";
import addMovies from "./Components/addMovies";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Trailleur from "./Pages/Trailleur";

const movies = [
  {
    title: "transformers:the last knight",
    description:
      " La clé de notre salut est enfouie dans les secrets du passé, dans l'histoire cachée des Transformers sur Terre. Sauver notre monde sera la mission d'une alliance inattendue : Cade Yeager, Bumblebee, un Lord anglais et un professeur d'Oxford.",
    posterURL:
      "https://img-4.linternaute.com/LUJWjRNPolMM9WB2n5Sc8ykHNhE=/1500x/smart/f168bdc178574c1bb90b71e0147da9b9/ccmcms-linternaute/11164726.jpg",
    Rating: 4,
    id: 5,
    trailleur: "https://www.youtube.com/watch?v=AntcyqJ6brc",
  },
  {
    title: "Godzilla",
    description:
      "Godzilla is an enormous, destructive, prehistoric sea monster awakened and empowered by nuclear radiation. With the nuclear bombings of Hiroshima and Nagasaki ..",
    posterURL:
      "https://www.ecranlarge.com/media/cache/1600x1200/uploads/articles/000/000/000/godzilla-vs-kong-photo-1374430-large.jpeg",
    Rating: 3,
    id: 1,
    trailleur: "https://www.youtube.com/watch?v=odM92ap8_c0",
  },
  {
    title: "the witch",
    description:
      "The Witch is a chilling portrait of a family unraveling within their own sins, leaving them prey for an inconceivable evil. In the Seventeenth Century, in New England, the farmer William and his family are banished from the Puritan plantation controlled by the church due to differences in religion principles",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyCnio2lwLuAiq0cmItOnPDQpvIi_aY5KsfLtCinI&usqp=CAE&s",
    Rating: 2,
    id: 2,
    trailleur: "https://www.youtube.com/watch?v=iQXmlf3Sefg",
  },
  {
    title: "the hunger games",
    description:
      "The Hunger Games is an annual event in which one boy and one girl aged 12–18 from each of the twelve districts surrounding the Capitol are selected by lottery to compete in a televised battle royale to the death. The book received critical acclaim from major reviewers and authors.",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl4wGiYIOovQ10-CnEXiUcok-ESQSKHME0KczcdxgX&usqp=CAE&s",
    Rating: 2,
    id: 4,
    trailleur: "https://www.youtube.com/watch?v=mfmrPu43DF8",
  },
  {
    title: "divergente",
    description:
      "divergente. Divergent qualifie ce qui diverge, c'est-à-dire qui est en désaccord, qui diffère, qui n'est pas en harmonie",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHgZNrSOyj7yDr1GveguJJchgHdRTYnB4MK1EkVBqd&usqp=CAE&s",
    Rating: 3,
    id: 1,
    trailleur: "https://www.youtube.com/watch?v=sutgWjz10sM",
  },
  {
    title: "the lord of the ring",
    description:
      "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil.",
    posterURL:
      "https://upload.wikimedia.org/wikipedia/fr/f/fb/Le_Seigneur_des_Anneaux_logo.png",
    Rating: 5,
    id: 3,
    trailleur: "https://www.youtube.com/watch?v=x8UAUAuKNcU",
  },
];

function App() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const filtrage = (text) => {};

  const add = (newMovie) => {
    movies.push(newMovie);

    console.log(movies);
    console.log(newMovie);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              text={text}
              setText={setText}
              rating={rating}
              setRating={setRating}
              movies={movies}
            />
          }
        />
        <Route path="/trailleur/:id" element={<Trailleur movies={movies} />} />
      </Routes>
      {/* <Filter
        text={text}
        setText={setText}
        rating={rating}
        setRating={setRating}
      />
      <movieList
        movies={movies.filter(
          (movie, i) =>
            movie.title.toLowerCase().includes(text.toLowerCase()) &&
            movie.rating == rating
        )}
      /> */}
      <addMovies add={add} />
    </div>
  );
}

export default App;
