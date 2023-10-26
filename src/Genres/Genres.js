import "./Genres.css";
import Genre from "../Genre/Genre";

const Genres = ({ onSelect, selectedGenre, genreData }) => {
	if (!genreData?.length) {
		return <p>No genres available.</p>;
	}

	const handleGenreClick = (genre) => {
		onSelect(genre);
	};

	const genreButtons = genreData.map((genre) => (
		<li key={genre}>
			<Genre
				genre={genre}
				isActive={genre === selectedGenre}
				onGenreClick={handleGenreClick}
			/>
		</li>
	));
	return (
		<div className="genres">
			<ul className="genres__list">{genreButtons}</ul>
		</div>
	);
};

export default Genres;
