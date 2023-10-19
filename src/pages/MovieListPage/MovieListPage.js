import React, { useState, useEffect } from "react";
import Overview from "Overview/Overview";
import Genres from "Genres/Genres";
import SortControl from "SortControl/SortControl";
import Movies from "Movies/Movies";
import MovieDetails from "MovieDetails/MovieDetails";
import Header from "Layouts/Header/Header";
import useFetch from "hooks/useFetch";

const { REACT_APP_MOVIES_API_KEY } = process.env;

const MovieListPage = () => {
	const [moviesData, setMoviesData] = useState([]);
	const [genreData, setGenreData] = useState([]);
	const [selectedGenre, setSelectedGenre] = useState("all");
	const [movieDetail, setMovieDetail] = useState({});
	const [searchedMovie, setSearchedMovie] = useState("");

	const fetchDataFromAPI = async (url, setData, extractData) => {
		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error("Network response not ok");
			}

			const responseData = await response.json();
			const extractedData = extractData
				? responseData.data
				: responseData;
			setData(extractedData);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		const search = "?search=";
		const searchBy = "&searchBy=title";
		const allMoviesUrl = `${REACT_APP_MOVIES_API_KEY}${search}${searchedMovie}${searchBy}`;
		fetchDataFromAPI(allMoviesUrl, setMoviesData, true);
	}, [searchedMovie]);

	useEffect(() => {
		const limit = "&limit=30";
		const sort = "?sortBy=title";
		const allMoviesUrl = `${REACT_APP_MOVIES_API_KEY}${sort}&sortOrder=asc${limit}`;
		fetchDataFromAPI(allMoviesUrl, setMoviesData, true);
	}, []);

	useEffect(() => {
		const queryParams = {
			searchBy: "genres",
			filter: selectedGenre,
			limit: "10",
		};
		const searchParams = new URLSearchParams(queryParams);
		const fullUrl = `${REACT_APP_MOVIES_API_KEY}?${searchParams.toString()}`;
		fetchDataFromAPI(fullUrl, setGenreData, false);
	}, [selectedGenre]);

	const handleGenreClick = (genre) => {
		setSelectedGenre(genre);
	};

	const onClick = (e) => {
		setMovieDetail(e);
	};

	const searchMovie = (e) => {
		setMovieDetail(e);
	};

	const handleSearchedMovie = (e) => {
		setSearchedMovie(e);
		console.log("handleSearchedMovie:", e);
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
			<Overview>
				<div className="overview__header">
					<Genres
						moviesData={moviesData}
						moviesByGenre={genreData.data}
						onSelect={handleGenreClick}
						selectedGenre={selectedGenre}
					/>
					<SortControl />
				</div>
				<Movies
					moviesByGenre={genreData.data}
					moviesData={moviesData}
					selectedGenre={selectedGenre}
					onClick={onClick}
				/>
			</Overview>
		</>
	);
};

export default MovieListPage;
