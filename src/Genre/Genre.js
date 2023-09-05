import React from "react";
import "./Genre.css";

const Genre = ({ genre, isActive, onGenreClick }) => {
	const handleClick = () => {
		onGenreClick(genre);
	};
	const buttonClassName = `genre ${isActive ? "active" : ""}`;
	return (
		<button className={buttonClassName} onClick={handleClick}>
			{genre}
		</button>
	);
};

export default Genre;
