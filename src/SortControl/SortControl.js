import "./SortControl.css";

const SortControl = () => {
	const handleSelectChange = (event) => {
		const selectedValue = event.target.value;
		console.log("Selected option:", selectedValue);
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
					onChange={handleSelectChange}
				>
					<option value="release-date">Release Date</option>
					<option value="title">Title</option>
				</select>
			</div>
		</div>
	);
};

export default SortControl;
