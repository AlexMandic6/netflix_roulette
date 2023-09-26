import React from "react";
import MovieTile from "../MovieTile/MovieTile";
import "./Movies.css";

const Movies = ({ moviesByGenre, allMovies, selectedGenre }) => {
	if (!moviesByGenre) {
		return <p>No movies available.</p>;
	}
	console.log("data:", allMovies);

	const onClick = (e) => {
		console.log("Clicked!!!", e);
	};

	const filteredMovies = selectedGenre !== "all" ? moviesByGenre : allMovies;

	const movieList = [...filteredMovies].map((movie) => {
		const { poster_path, title, release_date, genres } = movie;
		const movieData = { poster_path, title, release_date, genres };
		return (
			<li key={movie.id}>
				<MovieTile movieData={movieData} onClick={(e) => onClick(e)} />
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
