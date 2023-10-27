import { useState, useEffect } from "react";
import axios from "axios";

const useFetchMovieData = (
	REACT_APP_MOVIES_API_KEY,
	searchedMovie,
	sortCriterion,
	selectedGenre
) => {
	const [moviesData, setMoviesData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const baseUrl = REACT_APP_MOVIES_API_KEY;
			const params = new URLSearchParams();
			const limit = "30";

			if (searchedMovie) {
				params.set("search", searchedMovie);
			}
			params.set("sortBy", sortCriterion);
			params.set("searchBy", "title");
			params.set("sortOrder", "desc");
			if (selectedGenre !== "all" && !searchedMovie) {
				params.set("filter", selectedGenre);
			}
			params.set("limit", limit);

			const url = `${baseUrl}?${params.toString()}`;

			try {
				const response = await axios.get(url);

				if (response.statusText !== "OK") {
					throw new Error("Network response not ok");
				}

				const {
					data: { data },
				} = response;

				setMoviesData(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, [searchedMovie, sortCriterion, selectedGenre, REACT_APP_MOVIES_API_KEY]);

	return moviesData;
};

export default useFetchMovieData;
