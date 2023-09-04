import React from "react";
import "./Genres.css";
import Genre from "../Genre/Genre";

const Genres = ({ movies }) => {
	if (movies) {
		const allGenres = movies.flatMap((movie) => movie.genres);
		const genres = [...new Set(allGenres)];
		const genreButtons = genres.map((genre) => (
			<li>
				<Genre key={genre} genre={genre} />
			</li>
		));
		return (
			<div className="genres">
				<ul className="genres__list">{genreButtons}</ul>
			</div>
		);
	}
};

export default Genres;
