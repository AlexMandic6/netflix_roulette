import "./Genres.css";
import Genre from "../Genre/Genre";

const Genres = ({ genreData }) => {
	if (!genreData?.length) {
		return <p>No genres available.</p>;
	}

	const genreButtons = genreData.map((genre) => (
		<li key={genre}>
			<Genre genre={genre} />
		</li>
	));
	return (
		<div className="genres">
			<ul className="genres__list">{genreButtons}</ul>
		</div>
	);
};

export default Genres;
