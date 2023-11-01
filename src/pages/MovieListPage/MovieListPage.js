import React, { useState, useEffect } from "react";
import Genres from "containers/genresContainer/Genres/Genres";
import SortControl from "components/SortControl/SortControl";
import Movies from "containers/moviesContainer/Movies/Movies";
import MoviesWrapper from "containers/moviesContainer/MoviesWrapper/MoviesWrapper";
import MovieDetails from "components/MovieDetails/MovieDetails";
import Header from "layouts/Header/Header";
import useFetchMovieData from "hooks/useFetchMovies";

const { REACT_APP_MOVIES_API_KEY } = process.env;

const MovieListPage = () => {
	const [genreData, setGenreData] = useState([]);
	const [movieDetail, setMovieDetail] = useState({});
	const [genreListCalculated, setGenreListCalculated] = useState(false);
	const [searchedMovie, setSearchedMovie] = useState("");
	const [sortCriterion, setSortCriterion] = useState("release_date");
	const [selectedGenre, setSelectedGenre] = useState("all");

	const moviesData = useFetchMovieData(
		REACT_APP_MOVIES_API_KEY,
		searchedMovie,
		sortCriterion,
		selectedGenre
	);

	useEffect(() => {
		if (!genreListCalculated && moviesData.length > 0) {
			const allGenres = moviesData.flatMap((movie) => movie.genres);
			const genres = ["all", ...new Set(allGenres)];
			setGenreData(genres);
			setGenreListCalculated(true);
		}
	}, [moviesData, genreListCalculated]);

	const handleGenreClick = (genre) => {
		setSelectedGenre(genre);
	};

	const searchMovie = (e) => {
		setMovieDetail(e);
	};

	const onMoveDetail = (e) => {
		setMovieDetail(e);
	};

	const handleSearchedMovie = (e) => {
		setSearchedMovie(e);
	};

	const handleSortChange = (e) => {
		setSortCriterion(e.target.value);
	};

	return (
		<>
			{Object.keys(movieDetail).length ? (
				<MovieDetails
					movieDetail={movieDetail}
					searchMovie={searchMovie}
				/>
			) : (
				<Header onSearchedMovie={handleSearchedMovie} />
			)}
			<MoviesWrapper>
				<div className="movies-wrapper__header">
					<Genres
						genreData={genreData}
						onSelect={handleGenreClick}
						selectedGenre={selectedGenre}
					/>
					<SortControl onSortChange={handleSortChange} />
				</div>
				<Movies moviesData={moviesData} onMoveDetail={onMoveDetail} />
			</MoviesWrapper>
		</>
	);
};

export default MovieListPage;
