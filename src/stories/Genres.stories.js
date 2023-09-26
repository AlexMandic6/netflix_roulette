import React, { useState } from "react";
import Genres from "../Genres/Genres";
import "../App.css";

export default {
	title: "Components/Genres",
	component: Genres,
};

const movies = [
	{ title: "Movie 1", genres: ["action", "adventure"] },
	{ title: "Movie 2", genres: ["comedy", "romance"] },
];

const Template = ({ allMovies, selectedGenre }) => {
	selectedGenre = selectedGenre.toLowerCase();
	const [currentGenre, setCurrentGenre] = useState(selectedGenre || "all");

	const handleGenreClick = (genre) => {
		setCurrentGenre(genre);
	};

	return (
		<Genres
			allMovies={allMovies}
			onSelect={handleGenreClick}
			selectedGenre={currentGenre}
		/>
	);
};

export const Default = Template.bind({});
Default.args = {
	allMovies: movies,
	selectedGenre: "adventure",
};
