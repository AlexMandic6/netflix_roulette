import { useRef } from "react";
import "./SearchForm.css";

const SearchForm = ({ onSearch }) => {
	const inputRef = useRef(null);

	const handleKeyDown = (e) => {
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
				onKeyDown={handleKeyDown}
			/>
		</div>
	);
};

export default SearchForm;
