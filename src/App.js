import React, { useState, useEffect } from "react";
import "./App.css";
import Counter from "./Counter/Counter";
import Search from "./Search/Search";
import Overview from "./Overview/Overview";

const App = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const apiUrl = "http://localhost:4000/movies";

		fetch(apiUrl)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
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

	return (
		<>
			<Counter />
			<Search />
			<Overview movies={data.data} />
		</>
	);
};

export default App;
