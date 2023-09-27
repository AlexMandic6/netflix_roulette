import Logo from "../Logo.js/Logo";
import searchBtn from "../assets/images/search-button.svg";
import "./MovieDetails.css";
import extractYearFromDate from "../Utils/extractYearFromDate";
import formatGenres from "../Utils/formatGenres";
import formatTime from "../Utils/formatTime";

const MovieDetails = ({ movieDetail }) => {
	const {
		poster_path,
		title,
		vote_average,
		genres,
		release_date,
		runtime,
		overview,
	} = movieDetail;
	return (
		<div className="movie-details">
			<header className="search__logo">
				<Logo />
				<button className="movie-details__search">
					<img src={searchBtn} alt="search button" />
				</button>
			</header>
			<div className="movie-details__main">
				<div className="movie-details__image">
					<img src={poster_path} alt="" />
				</div>
				<div className="movie-info">
					<h1 className="movie-info__title">
						{title} <span>{vote_average}</span>
					</h1>
					<p className="movie-info__genres">{formatGenres(genres)}</p>
					<div className="movie-info__year">
						<h4 className="movie-info__year-data">
							{extractYearFromDate(release_date)}
						</h4>
						<h4 className="movie-info__year-data">
							{formatTime(runtime)}
						</h4>
					</div>
					<p className="movie-info__description">{overview}</p>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
