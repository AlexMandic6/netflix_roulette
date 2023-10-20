import "./MovieTile.css";
import extractYearFromDate from "Utils/extractYearFromDate";
import formatGenres from "Utils/formatGenres";

const MovieTile = ({ movieData, onMoveDetail }) => {
	const fallbackPosterUrl =
		"https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";

	const handleMovieTileClick = () => {
		onMoveDetail(movieData);
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<>
			<div onClick={handleMovieTileClick} className="poster">
				<img
					className="poster__img"
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
			</div>
			<p className="poster__genres">{formatGenres(movieData?.genres)}</p>
		</>
	);
};

export default MovieTile;
