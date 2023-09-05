import React from "react";
import "./SearchButton.css";

const SearchButton = ({ searchTerm, onSearch }) => {
	return (
		<button
			type="button"
			className="search-btn"
			onClick={() => {
				onSearch(searchTerm);
				console.log("Searched Movie:", searchTerm);
			}}
		>
			Search
		</button>
	);
};

export default SearchButton;
