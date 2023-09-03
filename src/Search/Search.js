import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Logo from "../Logo.js/Logo";

import "./Search.css";

const Search = () => {
	return (
		<div className="search">
			<div className="search__logo">
				<Logo />
				<button>Add movie</button>
			</div>
			<div className="search__form">
				<h1 className="searh__title">Find your movie</h1>
				<SearchForm />
			</div>
		</div>
	);
};

export default Search;
