import Logo from "components/Logo/Logo";
import searchBtn from "assets/images/search-button.svg";
import "./MovieDetails.css";
import extractYearFromDate from "utils/extractYearFromDate";
import formatGenres from "utils/formatGenres";
import formatTime from "utils/formatTime";
import { getMovie } from "./api";
import {
	useLoaderData,
	NavLink,
	useLocation,
	createSearchParams,
} from "react-router-dom";

export function loader({ params }) {
	return getMovie(params.movieId);
}

const MovieDetails = () => {
	const { search } = useLocation();
	const url = createSearchParams(search).toString();
	const finalUrl = `/?${url}`;
	const movieData = useLoaderData();

	return (
		<div className="movie-details">
			<header className="search__logo">
				<Logo />
				<NavLink to={finalUrl} className="movie-details__search">
					{<img src={searchBtn} alt="search button" />}
				</NavLink>
			</header>
			<div className="movie-details__main">
				<div className="movie-details__image">
					<img src={movieData.poster_path} alt="" />
				</div>
				<div className="movie-info">
					<h1 className="movie-info__title">
						{movieData.title} <span>{movieData.vote_average}</span>
					</h1>
					<p className="movie-info__genres">
						{formatGenres(movieData.genres)}
					</p>
					<div className="movie-info__year">
						<h4 className="movie-info__year-data">
							{extractYearFromDate(movieData.release_date)}
						</h4>
						<h4 className="movie-info__year-data">
							{formatTime(movieData.runtime)}
						</h4>
					</div>
					<p className="movie-info__description">
						{movieData.overview}
					</p>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
