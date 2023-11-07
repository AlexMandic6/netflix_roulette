import React, { useState } from "react";
import "./MovieTile.css";
import Dropdown from "components/Dropdown/Dropdown";
import extractYearFromDate from "utils/extractYearFromDate";
import formatGenres from "utils/formatGenres";
import { NavLink } from "react-router-dom";

const MovieTile = ({ movieData }) => {
	const { id } = movieData;
	const [isShown, setIsShown] = useState(false);

	const fallbackPosterUrl =
		"https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";

	const scrollToMovieDetail = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<>
			<div
				className="poster"
				onMouseEnter={() => setIsShown(true)}
				onMouseLeave={() => setIsShown(false)}
			>
				<div className="poster__img">
					{isShown && <Dropdown />}
					<NavLink to={`/${id}`} onClick={scrollToMovieDetail}>
						<img
							src={movieData?.poster_path}
							onError={(e) => {
								e.target.src = fallbackPosterUrl;
								e.target.classList.add("poster__fallback");
							}}
							alt={movieData?.title}
						/>
					</NavLink>
				</div>
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
