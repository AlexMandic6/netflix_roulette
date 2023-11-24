import { useRef } from "react";
import "./SearchForm.css";
import Button from "@/components/Button/Button";
// import { useSearchParams } from "react-router-dom";

const SearchForm = () => {
	// const [searchParams, setSearchParams] = useSearchParams();
	// const search = searchParams.get("search") || "";

	const inputRef = useRef(null);

	const handleSearch = () => {
		// setSearchParams((searchParams) => {
		// 	searchParams.set("search", inputRef.current.value);
		// 	return searchParams;
		// });
	};

	const handleSubmit = (e) => {
		if (e.key === "Enter") {
			// setSearchParams((searchParams) => {
			// 	searchParams.set("search", inputRef.current.value);
			// 	return searchParams;
			// });
		}
	};

	return (
		<div className="search-form">
			<input
				className="search-form__input"
				type="text"
				ref={inputRef}
				// defaultValue={search}
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
