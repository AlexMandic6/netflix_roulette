"use client";
import "./SortControl.css";
// import { useSearchParams } from "react-router-dom";

const SortControl = () => {
	// const [searchParams, setSearchParams] = useSearchParams();
	// const sortBy = searchParams.get("sortBy") || "release_date";

	const handleSortChange = (e) => {
		// setSearchParams((searchParams) => {
		// 	searchParams.set("sortBy", e.target.value);
		// 	return searchParams;
		// });
	};

	return (
		<div className="sort">
			<label className="sort-by__label" htmlFor="sort-by">
				Sort By:
			</label>
			<div className="select">
				<select
					id="sort-by"
					data-testid="sort-select"
					className="sort-by"
					onChange={handleSortChange}
					// value={sortBy}
				>
					<option value="release_date">Release Date</option>
					<option value="title">Title</option>
				</select>
			</div>
		</div>
	);
};

export default SortControl;
