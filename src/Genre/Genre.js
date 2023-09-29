import React from "react";
import "./Genre.css";
import Button from "../Button/Button";

const Genre = ({ genre, isActive, onGenreClick }) => {
	const handleClick = () => {
		onGenreClick(genre);
	};
	const buttonClassName = `genre ${isActive ? "active" : ""}`;
	return (
		<Button
			onClick={handleClick}
			buttonClass={buttonClassName}
			buttonText={genre}
		/>
	);
};

export default Genre;
