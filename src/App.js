import React, { useState, useEffect } from "react";
import "./App.css";
import Counter from "Counter/Counter";
import Search from "Layouts/Header/Header";
import Overview from "Overview/Overview";
import MovieDetails from "MovieDetails/MovieDetails";
import Footer from "Layouts/Footer/Footer";

const { REACT_APP_MOVIES_API_KEY } = process.env;

const App = () => {
	const [data, setData] = useState([]);
	const [genreData, setGenreData] = useState([]);
	const [selectedGenre, setSelectedGenre] = useState("all");
	const [movieDetail, setMovieDetail] = useState({});

	useEffect(() => {
		const limit = "&limit=50";
		const allMoviesUrl = `${REACT_APP_MOVIES_API_KEY}?searchBy=genres${limit}`;

		fetch(allMoviesUrl)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response not ok");
				}
				return response.json();
			})
			.then((responseData) => {
				setData(responseData);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	useEffect(() => {
		const queryParams = {
			searchBy: "genres",
			filter: selectedGenre,
			limit: "10",
		};
		const searchParams = new URLSearchParams(queryParams);

		const fullUrl = `${REACT_APP_MOVIES_API_KEY}?${searchParams.toString()}`;

		fetch(fullUrl)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((responseData) => {
				setGenreData(responseData);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
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

	return (
		<>
			<Counter initialCount={0} />
			{Object.keys(movieDetail).length ? (
				<MovieDetails
					movieDetail={movieDetail}
					searchMovie={searchMovie}
				/>
			) : (
				<Search />
			)}
			<Overview
				allMovies={data.data}
				moviesByGenre={genreData.data}
				onSelect={handleGenreClick}
				selectedGenre={selectedGenre}
				onClick={onClick}
			/>
			<Footer />
		</>
	);
};

export default App;
