import Dialog from "components/Dialog/Dialog";
import Button from "components/Button/Button";

import DatePicker from "react-datepicker";
import { isUrlValid, transformMovieObject } from "./movieFormUtils";
import "react-datepicker/dist/react-datepicker.css";
import "./MovieForm.css";

import Select from "react-select";
import SelectStyles from "./movieFormSelectStyles";

import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const MovieForm = ({ closePortal, title }) => {
	const options = [
		{ value: "crime", label: "Crime" },
		{ value: "documentary", label: "Documentary" },
		{ value: "horror", label: "Horror" },
		{ value: "comedy", label: "Comedy" },
	];

	return (
		<Dialog title={title} closePortal={closePortal}>
			<Formik
				initialValues={{
					title: "Test title",
					release_date: "",
					poster_path:
						"https://image.tmdb.org/t/p/w500/cvit6HDbXHE6W5kGPd47jd0wthQ.jpg",
					vote_average: "6",
					genres: "",
					runtime: 120,
					overview: "test overview",
				}}
				validate={(values) => {
					const errors = {};
					if (!values.title) {
						errors.title = "Please enter the movie title";
					} else if (values.title.length < 2) {
						errors.title = "Title must have at lease 1 character";
					}
					if (!values.overview) {
						errors.overview = "Please enter the movie overview";
					}
					if (!values.genres) {
						errors.genres = "Please select at lease one genre!";
					}
					if (!values.runtime) {
						errors.runtime = "Please enter the movie runtime";
					} else if (values.runtime < 0) {
						errors.runtime = "Runtime must be a positive number";
					}
					if (!values.poster_path) {
						errors.poster_path = "Please enter the movie URL";
					} else if (!isUrlValid(values.poster_path)) {
						errors.poster_path = "Please enter a valid URL";
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					const transformedMovieObject = transformMovieObject(values);

					axios
						.post(
							"http://localhost:4000/movies",
							transformedMovieObject
						)
						.then((response) => {
							console.log("Response:", response);
						})
						.catch((error) => {
							console.error("Error:", error);
						});
					setSubmitting(false);
				}}
			>
				{(formik) => {
					return (
						<Form
							className="form"
							action="http://localhost:4000/movies"
							method="POST"
						>
							<div className="form-group">
								<label
									htmlFor="title"
									className="form-group__label"
								>
									Title:
								</label>
								<Field
									type="text"
									id="title"
									name="title"
									className="form-group__input"
									placeholder="Title"
								/>
								<ErrorMessage name="title" />
							</div>

							<div className="form-group">
								<label
									htmlFor="releaseDate"
									className="form-group__label"
								>
									Release Date:
								</label>
								<Field name="release_date">
									{({ field }) => {
										return (
											<DatePicker
												maxDate={new Date()}
												dateFormat="yyyy-MM-dd"
												showIcon
												name="release_date"
												id="release_date"
												value={new Date()}
												{...field}
												selected={field.value}
												onChange={(val) => {
													formik.setFieldValue(
														field.name,
														val
													);
												}}
											/>
										);
									}}
								</Field>
							</div>
							<div className="form-group">
								<label
									htmlFor="poster_path"
									className="form-group__label"
								>
									Movie URL:
								</label>
								<Field
									type="text"
									id="poster_path"
									name="poster_path"
									placeholder="https:"
									className="form-group__input"
								/>
								<ErrorMessage name="poster_path" />
							</div>
							<div className="form-group">
								<label
									htmlFor="vote_average"
									className="form-group__label"
								>
									Rating:
								</label>
								<Field
									type="number"
									id="vote_average"
									name="vote_average"
									min="1"
									max="10"
									step="0.1"
									className="form-group__input"
									placeholder="7.8"
								/>
							</div>
							<div className="form-group">
								<label
									htmlFor="genre"
									className="form-group__label"
								>
									Genre:
								</label>
								<Field
									as={Select}
									name="genres"
									isMulti
									options={options}
									styles={SelectStyles}
									onChange={(option) => {
										console.log("Option:", option);
										return formik.setFieldValue(
											"genres",
											option
										);
									}}
								/>
								<ErrorMessage name="genres" />
							</div>
							<div className="form-group">
								<label
									htmlFor="runtime"
									className="form-group__label"
								>
									Runtime (minutes):
								</label>
								<Field
									type="number"
									id="runtime"
									name="runtime"
									min="0"
									className="form-group__input"
									placeholder="minutes"
								/>
								<ErrorMessage name="runtime" />
							</div>
							<div className="form-group form-group--full-width">
								<label
									htmlFor="overview"
									className="form-group__label"
								>
									Overview:
								</label>
								<Field
									as="textarea"
									id="overview"
									name="overview"
									rows="5"
									cols="40"
									className="form-group__input form-group__input--textarea"
									placeholder="Movie description"
								></Field>
								<ErrorMessage name="overview" />
							</div>
							<div className="form-group form-group__btns form-group--full-width">
								<Button
									buttonType="reset"
									buttonText="Reset"
									buttonClass="btn-secondary"
									onClick={formik.handleReset}
								/>
								<Button
									buttonType="submit"
									buttonText="Submit"
									buttonClass="btn-primary"
								/>
							</div>
						</Form>
					);
				}}
			</Formik>
		</Dialog>
	);
};

export default MovieForm;
