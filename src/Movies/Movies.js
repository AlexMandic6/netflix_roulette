import React from "react";

const Movies = ({ moviesByGenre, allMovies, selectedGenre }) => {
	if (!moviesByGenre) {
		return <p>No movies available.</p>;
	}

	const allMoviesList = [...allMovies].map((movie) => (
		<li key={movie.id}>
			<h3>{movie.title}</h3>
		</li>
	));

	const movieList = moviesByGenre.map((movie) => (
		<li key={movie.id}>
			<h3>{movie.title}</h3>
		</li>
	));

	return (
		<div>
			<h2>Movies from genre selected:</h2>
			<ul>
				{selectedGenre && selectedGenre !== "all"
					? movieList
					: allMoviesList}
			</ul>
		</div>
	);
};

export default Movies;
