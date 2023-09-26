import "./MovieTile.css";
import extractYearFromDate from "../Utils/ExtractYearFromDate";

const MovieTile = ({ movieData }) => {
	const fallbackPosterUrl =
		"https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";

	const renderGenres = () => {
		const genres = movieData?.genres;
		if (genres?.length) {
			const formattedGenres =
				genres.length === 1
					? genres[0]
					: genres.slice(0, -1).join(", ") +
					  (genres.length === 2 ? " & " : ", ") +
					  genres.slice(-1)[0];

			return formattedGenres;
		}
		return "No genres available.";
	};

	return (
		<div>
			<img
				className="poster"
				src={movieData?.poster_path}
				onError={(e) => {
					e.target.src = fallbackPosterUrl; // Set fallback URL if the original poster_path URL fails to load
					e.target.classList.add("poster__fallback");
				}}
				alt={movieData?.title}
			/>
			<div className="poster__header">
				<h3 className="poster__title">
					{movieData?.title || `No Title Available.`}
				</h3>
				<p className="poster__release-date">
					{extractYearFromDate(movieData.release_date)}
				</p>
			</div>
			<p className="poster__genres">{renderGenres()}</p>
		</div>
	);
};

export default MovieTile;
