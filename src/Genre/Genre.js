import "./Genre.css";
import Button from "components/Button/Button";

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
