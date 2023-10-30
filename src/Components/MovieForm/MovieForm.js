import React, { useState } from "react";
import Dialog from "components/Dialog/Dialog";
import Button from "components/Button/Button";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./MovieForm.css";

import Select from "react-select";
import SelectStyles from "./MovieFormSelectStyles";

const MovieForm = ({ closePortal, title }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = Object.fromEntries(new FormData(event.target));
		console.log("Form submitted:", formData);
		event.target.reset();
	};

	const [startDate, setStartDate] = useState(new Date());
	const [selectedOption, setSelectedOption] = useState([]);

	const options = [
		{ value: "crime", label: "Crime" },
		{ value: "documentary", label: "Documentary" },
		{ value: "horror", label: "Horror" },
		{ value: "comedy", label: "Comedy" },
	];

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
						<DatePicker
							showIcon
							selected={startDate}
							onChange={(date) => setStartDate(date)}
						/>
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
							type="number"
							id="rating"
							name="rating"
							min="0"
							max="10"
							step="0.1"
							className="form-group__input"
							placeholder="7.8"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="genre" className="form-group__label">
							Genre:
						</label>
						<Select
							isMulti
							value={selectedOption}
							onChange={(selectedOptions) =>
								setSelectedOption(selectedOptions)
							}
							options={options}
							styles={SelectStyles}
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
							className="form-group__input form-group__input--textarea"
							placeholder="Movie description"
							required
						></textarea>
					</div>
					<div className="form-group form-group__btns form-group--full-width">
						<Button
							buttonType="reset"
							buttonText="Reset"
							buttonClass="btn-secondary"
							onClick={() => {
								setStartDate(new Date());
								setSelectedOption([]);
							}}
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
