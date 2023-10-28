import { useRef } from "react";
import "./SearchForm.css";

import Button from "components/Button/Button";

const SearchForm = ({ onSearch }) => {
	const inputRef = useRef(null);

	const handleSearch = () => {
		onSearch(inputRef.current.value);
	};

	const handleSubmit = (e) => {
		if (e.key === "Enter") {
			onSearch(inputRef.current.value);
		}
	};

	return (
		<div className="search-form">
			<input
				className="search-form__input"
				type="text"
				ref={inputRef}
				placeholder="What do you want to watch?"
				onKeyDown={handleSubmit}
			/>
			<Button
				buttonType="button"
				buttonText="Search"
				buttonClass="btn-primary"
				onClick={handleSearch}
			/>
		</div>
	);
};

export default SearchForm;
