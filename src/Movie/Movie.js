import React from "react";
import "./Movie.css";

const Movie = ({
  movie,
  setID,
  id,
  loggedIn,
  rated,
  favorited,
  removeFavoritedMovie,
  addFavoriteMovie,
  
}) => {
  const clickHandler = () => {
    favorited
      ? removeFavoritedMovie(movie.user_id, id)
      : addFavoriteMovie(movie.user_id, id);
  }
  // if user is not logged in

  if (!loggedIn) {
    return (
      <section className="movie" id={id} onClick={setID}>
        <h2>{movie.title} </h2>
        <img src={movie.poster_path} alt="poster" className="poster" />
        <h3 aria-label="average-rating">
          Average Rating: {movie.average_rating.toFixed(2)}
        </h3>
      </section>
    );
  }
  return (
    <section className="movie" id={id}>
      <h2>{movie.title} </h2>
      {favorited ? (
        <img
          src={"../favorited.svg"}
          alt="favorited"
          className="heart-icon"
          onClick={clickHandler}
        />
      ) : (
        <img
          src={"../favorite.svg"}
          alt="unfavorited"
          className="heart-icon"
          onClick={clickHandler}
        />
      )}

      <img src={movie.poster_path} alt="poster" className="poster" />
      <h3 aria-label="average-rating">
        Average Rating: {movie.average_rating.toFixed(2)}
      </h3>
      {rated ? (
        <h3 aria-label="user-rating">Your rating : {rated}</h3>
      ) : (
        <h3 aria-label="user-rating">No User Rating</h3>
      )}
    </section>
  );
};

export default Movie;
