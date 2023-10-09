import React from "react";
import Button from "Components/Button/Button";
import "./SearchButton.css";

const SearchButton = ({ searchTerm, onSearch }) => {
	return (
		<Button
			onClick={() => {
				onSearch(searchTerm);
				console.log("Searched Movie:", searchTerm);
			}}
			buttonClass="search-btn"
			buttonText="Search"
		/>
	);
};

export default SearchButton;
