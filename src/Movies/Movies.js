import React from "react";
import MovieTile from "../MovieTile/MovieTile";
import "./Movies.css";

const Movies = ({ moviesByGenre, allMovies, selectedGenre, onClick }) => {
	if (!moviesByGenre) {
		return <p>No movies available.</p>;
	}
	console.log("data:", allMovies);

	const filteredMovies = selectedGenre !== "all" ? moviesByGenre : allMovies;

	const movieList = [...filteredMovies].map((movie) => {
		const {
			poster_path,
			title,
			release_date,
			genres,
			runtime,
			overview,
			vote_average,
		} = movie;
		const movieData = {
			poster_path,
			title,
			release_date,
			genres,
			runtime,
			overview,
			vote_average,
		};
		return (
			<li key={movie.id}>
				<MovieTile movieData={movieData} onClick={onClick} />
			</li>
		);
	});

	return (
		<div>
			<ul className="movies__list">
				{movieList.length > 0 ? movieList : <p>No movies available.</p>}
			</ul>
		</div>
	);
};

export default Movies;
