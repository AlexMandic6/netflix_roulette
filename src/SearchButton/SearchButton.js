import React from "react";
import "./SearchButton.css";

const SearchButton = ({ searchTerm, onSearch }) => {
	return (
		<button
			type="button"
			className="search-btn"
			onClick={() => {
				onSearch(searchTerm);
			}}
		>
			Search
		</button>
	);
};

export default SearchButton;
