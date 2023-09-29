import React from "react";
import Dialog from "../Dialog/Dialog";
import Button from "../Button/Button";
import CloseIcon from "../CloseIcon/CloseIcon";
import "./MovieForm.css";

const MovieForm = ({ closePortal }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = Object.fromEntries(new FormData(event.target));
		console.log("Form submitted:", formData);
		event.target.reset();
	};

	return (
		<Dialog>
			<div>
				<h1 className="dialog__header">Movie Information Form</h1>
				<Button
					onClick={closePortal}
					buttonClass="dialog__close-btn"
					buttonText={<CloseIcon />}
				/>
				<form onSubmit={handleSubmit}>
					<label htmlFor="title">Title:</label>
					<input type="text" id="title" name="title" required />
					<br />
					<br />

					<label htmlFor="releaseDate">Release Datee:</label>
					<input
						type="date"
						id="releaseDate"
						name="releaseDate"
						required
					/>
					<br />
					<br />

					<label htmlFor="movieURL">Movie URL:</label>
					<input
						type="text"
						id="movieURL"
						name="movieURL"
						placeholder="https://"
						required
					/>
					<br />
					<br />

					<label htmlFor="rating">Rating:</label>
					<input
						type="number"
						id="rating"
						name="rating"
						min="0"
						max="10"
						required
					/>
					<br />
					<br />

					<label htmlFor="genre">Genre:</label>
					<select id="genre" name="genre" required>
						<option value="" disabled>
							Select genre
						</option>
						<option value="action">Action</option>
						<option value="comedy">Comedy</option>
						<option value="drama">Drama</option>
					</select>
					<br />
					<br />

					<label htmlFor="runtime">Runtime (minutes):</label>
					<input
						type="number"
						id="runtime"
						name="runtime"
						min="0"
						required
					/>
					<br />
					<br />

					<label htmlFor="overview">Overview:</label>
					<br />
					<textarea
						id="overview"
						name="overview"
						rows="5"
						cols="40"
						required
					></textarea>
					<br />
					<br />

					<button type="submit">Submit</button>
					<button type="reset">Reset</button>
				</form>
			</div>
		</Dialog>
	);
};

export default MovieForm;
