import React from "react";
import "./Overview.css";
import Genres from "../Genres/Genres";

const Overview = ({ movies }) => {
	return (
		<div className="overview">
			<Genres movies={movies} />
		</div>
	);
};

export default Overview;
