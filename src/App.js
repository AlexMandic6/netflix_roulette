import React from "react";
import "./App.css";
import Counter from "Components/Counter/Counter";
import MovieListPage from "pages/MovieListPage/MovieListPage";
import Footer from "Layouts/Footer/Footer";

const App = () => {
	return (
		<>
			<Counter initialCount={0} />
			<MovieListPage />
			<Footer />
		</>
	);
};

export default App;
