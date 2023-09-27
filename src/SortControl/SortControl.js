import "./SortControl.css";

const SortControl = () => {
	const handleSelectChange = (event) => {
		const selectedValue = event.target.value;
		console.log("Selected option:", selectedValue);
	};

	return (
		<div className="sort">
			<label className="sort-by__label" for="sort-by">
				Sort By:
			</label>
			<div class="select">
				<select
					id="sort-by"
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
