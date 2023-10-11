import React from "react";
import "./Genres.css";
import Genre from "../Genre/Genre";

const Genres = ({ allMovies, onSelect, selectedGenre }) => {
	if (!allMovies) {
		return <p>No genres available.</p>;
	}

	const handleGenreClick = (genre) => {
		onSelect(genre);
	};

	const allGenres = allMovies.flatMap((movie) => movie.genres);
	const genres = ["all", ...new Set(allGenres)];
	const genreButtons = genres.map((genre) => (
		<li key={genre}>
			<Genre
				genre={genre}
				isActive={genre === selectedGenre}
				onGenreClick={handleGenreClick}
			/>
		</li>
	));
	return (
		<div className="genres">
			<ul className="genres__list">{genreButtons}</ul>
		</div>
	);
};

export default Genres;
