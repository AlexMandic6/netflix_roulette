import React, { useState, useEffect } from "react";
import Genres from "containers/genresContainer/Genres/Genres";
import SortControl from "components/SortControl/SortControl";
import Movies from "containers/moviesContainer/Movies/Movies";
import MoviesWrapper from "containers/moviesContainer/MoviesWrapper/MoviesWrapper";
import MovieDetails from "components/MovieDetails/MovieDetails";
import Header from "layouts/Header/Header";
import useFetchMovieData from "hooks/useFetchMovies";

import { Outlet, Link } from "react-router-dom";

const { REACT_APP_MOVIES_API_KEY } = process.env;

const MovieListPage = () => {
	const [genreData, setGenreData] = useState([]);
	const [movieDetail, setMovieDetail] = useState({});
	const [genreListCalculated, setGenreListCalculated] = useState(false);

	const moviesData = useFetchMovieData(REACT_APP_MOVIES_API_KEY);

	useEffect(() => {
		if (!genreListCalculated && moviesData.length > 0) {
			const allGenres = moviesData.flatMap((movie) => movie.genres);
			const genres = ["all", ...new Set(allGenres)];
			setGenreData(genres);
			setGenreListCalculated(true);
		}
	}, [moviesData, genreListCalculated]);

	const searchMovie = (e) => {
		setMovieDetail(e);
	};

	const onMoveDetail = (e) => {
		setMovieDetail(e);
	};

	return (
		<>
			{Object.keys(movieDetail).length ? (
				<MovieDetails
					movieDetail={movieDetail}
					searchMovie={searchMovie}
				/>
			) : (
				<Header />
			)}
			{/* <Outlet /> */}
			<MoviesWrapper>
				<div className="movies-wrapper__header">
					<Genres genreData={genreData} />
					<SortControl />
				</div>
				<Movies moviesData={moviesData} onMoveDetail={onMoveDetail} />
			</MoviesWrapper>
		</>
	);
};

export default MovieListPage;
