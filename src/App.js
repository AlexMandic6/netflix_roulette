import React from "react";
import "./App.css";
import Counter from "./Counter/Counter";
import Search from "./Search/Search";
import Overview from "./Overview/Overview";

const App = () => {
	return (
		<>
			<Counter />
			<Search />
			<Overview />
		</>
	);
};

export default App;
