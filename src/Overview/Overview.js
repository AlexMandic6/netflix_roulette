import React from "react";
import "./Overview.css";
import Genres from "../Genres/Genres";
import Movies from "../Movies/Movies";

const Overview = ({
	allMovies,
	onSelect,
	selectedGenre,
	moviesByGenre,
	onClick,
}) => {
	return (
		<div className="overview">
			<Genres
				allMovies={allMovies}
				moviesByGenre={moviesByGenre}
				onSelect={onSelect}
				selectedGenre={selectedGenre}
			/>
			<Movies
				moviesByGenre={moviesByGenre}
				allMovies={allMovies}
				selectedGenre={selectedGenre}
				onClick={onClick}
			/>
		</div>
	);
};

export default Overview;
