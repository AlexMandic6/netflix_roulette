import React from "react";
import "./App.css";
import Counter from "components/Counter/Counter";
import MovieListPage from "pages/MovieListPage/MovieListPage";
import Footer from "layouts/Footer/Footer";

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
