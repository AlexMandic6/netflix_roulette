import "./Genres.css";
import Genre from "../Genre/Genre";

const Genres = ({ moviesData, onSelect, selectedGenre }) => {
	if (!moviesData) {
		return <p>No genres available.</p>;
	}

	const handleGenreClick = (genre) => {
		onSelect(genre);
	};

	const allGenres = moviesData.flatMap((movie) => movie.genres);
	const genres = ["all", ...new Set(allGenres)];
	const genreButtons = genres.map((genre) => (
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
