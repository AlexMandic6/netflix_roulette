import React from "react";
import "./SearchForm.css";

const SearchForm = ({ searchTerm, onSearch }) => {
	return (
		<div className="search-form">
			<input
				className="search-form__input"
				type="text"
				placeholder="What do you want to watch?"
				value={searchTerm}
				onChange={(e) => onSearch(e.target.value)}
			/>
		</div>
	);
};

export default SearchForm;
