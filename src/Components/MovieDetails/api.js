import axios from "axios";

const { REACT_APP_MOVIES_API_KEY } = process.env;

export async function getMovie(id) {
	const baseUrl = REACT_APP_MOVIES_API_KEY;
	const url = id ? `${baseUrl}/${id}}` : `${baseUrl}`;

	try {
		const response = await axios.get(url);

		if (response.statusText !== "OK") {
			throw new Error("Network response not ok");
		}

		const { data: movieData } = response;
		return movieData;
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}
