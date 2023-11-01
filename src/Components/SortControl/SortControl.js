import "./SortControl.css";

const SortControl = ({ onSortChange }) => {
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
					onChange={onSortChange}
				>
					<option value="release_date">Release Date</option>
					<option value="title">Title</option>
				</select>
			</div>
		</div>
	);
};

export default SortControl;
