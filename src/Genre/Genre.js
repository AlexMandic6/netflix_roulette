import React from "react";
import "./Genre.css";
import Button from "../Components/Button/Button";

const Genre = ({ genre, isActive, onGenreClick }) => {
	const buttonClassName = `genre ${isActive ? "active" : ""}`;

	const handleClick = () => {
		onGenreClick(genre);
	};

	return (
		<Button
			onClick={handleClick}
			buttonClass={buttonClassName}
			buttonText={genre}
		/>
	);
};

export default Genre;
