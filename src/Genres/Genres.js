import React from "react";
import "./Genres.css";
import Genre from "../Genre/Genre";

const Genres = () => {
	//hardcoded values, to be replaces with real ones
	const genres = ["all", "documentary", "comedy", "horror", "crime"];
	const genreButtons = genres.map((genre) => (
		<li>
			<Genre key={genre} genre={genre} />{" "}
		</li>
	));

	return (
		<div className="genres">
			<ul className="genres__list">{genreButtons}</ul>
		</div>
	);
};

export default Genres;
