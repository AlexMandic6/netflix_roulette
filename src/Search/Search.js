import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import SearchButton from "../SearchButton/SearchButton";
import Logo from "../Logo.js/Logo";

import "./Search.css";

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const onSearch = (searchTerm) => {
		setSearchTerm(searchTerm);
	};
	return (
		<div className="search">
			<div className="search__logo">
				<Logo />
				<button>+ Add movie</button>
			</div>
			<div className="search__form__wrapper">
				<h1 className="search__title">Find your movie</h1>
				<div className="search__form">
					<SearchForm searchTerm={searchTerm} onSearch={onSearch} />
					<SearchButton searchTerm={searchTerm} onSearch={onSearch} />
				</div>
			</div>
		</div>
	);
};

export default Search;
