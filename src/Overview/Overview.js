import React from "react";
import "./Overview.css";
import Genres from "../Genres/Genres";
import Movies from "../Movies/Movies";
import SortControl from "../SortControl/SortControl";

const Overview = ({
	allMovies,
	onSelect,
	selectedGenre,
	moviesByGenre,
	onClick,
}) => {
	return (
		<div className="overview">
			<div className="overview__header">
				<Genres
					allMovies={allMovies}
					moviesByGenre={moviesByGenre}
					onSelect={onSelect}
					selectedGenre={selectedGenre}
				/>
				<SortControl />
			</div>
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
