import React, { useState } from "react";
import Dialog from "../Dialog/Dialog";
import Button from "../Button/Button";
import "./MovieForm.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Select from "react-select";

const MovieForm = ({ closePortal, title }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = Object.fromEntries(new FormData(event.target));
		console.log("Form submitted:", formData);
		event.target.reset();
	};

	const Example = () => {
		const [startDate, setStartDate] = useState(null);
		return (
			<DatePicker
				className="form-group__input"
				selected={startDate}
				placeholderText="Select Date"
				onChange={(date) => setStartDate(date)}
			/>
		);
	};

	const options = [
		{ value: "crime", label: "Crime" },
		{ value: "documentary", label: "Documentary" },
		{ value: "horror", label: "Horror" },
		{ value: "comedy", label: "Comedy" },
	];

	const [selectedOption, setSelectedOption] = useState(null);

	return (
		<Dialog title={title} closePortal={closePortal}>
			<div>
				<form onSubmit={handleSubmit} className="form">
					<div className="form-group">
						<label htmlFor="title" className="form-group__label">
							Title:
						</label>
						<input
							type="text"
							id="title"
							name="title"
							className="form-group__input"
							placeholder="Title"
							required
						/>
					</div>
					<div className="form-group">
						<label
							htmlFor="releaseDate"
							className="form-group__label"
						>
							Release Date:
						</label>
						<Example />
					</div>
					<div className="form-group">
						<label htmlFor="movieURL" className="form-group__label">
							Movie URL:
						</label>
						<input
							type="text"
							id="movieURL"
							name="movieURL"
							placeholder="https://"
							className="form-group__input"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="rating" className="form-group__label">
							Rating:
						</label>
						<input
							type="text"
							id="rating"
							name="rating"
							className="form-group__input"
							placeholder="7.8"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="genre" className="form-group__label">
							Genre:
						</label>
						<Select
							defaultValue={selectedOption}
							onChange={setSelectedOption}
							options={options}
							styles={{
								control: (baseStyles, state) => ({
									...baseStyles,
									borderColor: state.isFocused
										? "grey"
										: "red",
									border: "none",
									boxShadow: "none",
									outline: state.isFocused
										? "2px solid #fff"
										: "none",
									outlineOffset: "3px",
								}),
							}}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="runtime" className="form-group__label">
							Runtime (minutes):
						</label>
						<input
							type="number"
							id="runtime"
							name="runtime"
							min="0"
							className="form-group__input"
							placeholder="minutes"
							required
						/>
					</div>
					<div className="form-group form-group--full-width">
						<label htmlFor="overview" className="form-group__label">
							Overview:
						</label>
						<textarea
							id="overview"
							name="overview"
							rows="5"
							cols="40"
							className="form-group__input"
							placeholder="Movie description"
							required
						></textarea>
					</div>
					{/* <button type="submit">Submit</button>
					<button type="reset">Reset</button> */}
					<div className="form-group form-group__btns form-group--full-width">
						<Button
							buttonType="reset"
							buttonText="Reset"
							buttonClass="btn-secondary"
						/>
						<Button
							buttonType="submit"
							buttonText="Submit"
							buttonClass="btn-primary"
						/>
					</div>
				</form>
			</div>
		</Dialog>
	);
};

export default MovieForm;
