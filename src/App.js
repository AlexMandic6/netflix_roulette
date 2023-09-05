import React, { useState, useEffect } from "react";
import "./App.css";
import config from "./apiConfig";
import Counter from "./Counter/Counter";
import Search from "./Search/Search";
import Overview from "./Overview/Overview";

const App = () => {
	const [data, setData] = useState([]);
	const [genreData, setGenreData] = useState([]);
	const [selectedGenre, setSelectedGenre] = useState("all");

	useEffect(() => {
		const apiUrl = config.apiUrl;
		const limit = "&limit=50";
		const allMoviesUrl = `${apiUrl}?searchBy=genres${limit}`;

		fetch(allMoviesUrl)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((responseData) => {
				console.log("data:", responseData);
				setData(responseData);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	useEffect(() => {
		const apiUrl = config.apiUrl;
		const queryParams = {
			searchBy: "genres",
			filter: selectedGenre,
			limit: "10",
		};
		const searchParams = new URLSearchParams(queryParams);

		const fullUrl = `${apiUrl}?${searchParams.toString()}`;

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

	return (
		<>
			<Counter />
			<Search />
			<Overview
				allMovies={data.data}
				moviesByGenre={genreData.data}
				onSelect={handleGenreClick}
				selectedGenre={selectedGenre}
			/>
		</>
	);
};

export default App;
