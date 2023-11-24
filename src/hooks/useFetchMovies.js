import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const useFetchMovieData = (REACT_APP_MOVIES_API_KEY) => {
	const [moviesData, setMoviesData] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		const fetchData = async () => {
			const baseUrl = REACT_APP_MOVIES_API_KEY;
			const params = new URLSearchParams();
			const limit = "30";

			const searchedMovie = searchParams.get("search") || "";
			searchedMovie && params.set("search", searchedMovie);
			const sortBy = searchParams.get("sortBy") || "release_date";
			params.set("sortBy", sortBy);
			params.set("searchBy", "title");
			params.set("sortOrder", "desc");
			const filter = searchParams.get("filter") || "all";

			if (filter !== "all" && !searchedMovie) {
				params.set("filter", filter);
			}
			params.set("limit", limit);

			const url = `${baseUrl}?${params.toString()}`;

			try {
				const response = await axios.get(url, { signal });

				if (response.statusText !== "OK") {
					throw new Error("Network response not ok");
				}

				const {
					data: { data },
				} = response;

				setMoviesData(data);
			} catch (error) {
				if (!axios.isCancel(error)) {
					console.error("Error fetching data:", error);
				}
			}
		};

		fetchData();
		return () => {
			controller.abort();
		};
	}, [REACT_APP_MOVIES_API_KEY, searchParams]);

	return moviesData;
};

export default useFetchMovieData;
