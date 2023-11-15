import Dialog from "components/Dialog/Dialog";
import Button from "components/Button/Button";

import DatePicker from "react-datepicker";
import {
	isUrlValid,
	transformMovieObject,
	combineObjects,
	convertGenresToObjArr,
} from "./movieFormUtils";
import "react-datepicker/dist/react-datepicker.css";
import "./MovieForm.css";

import Select from "react-select";
import SelectStyles from "./movieFormSelectStyles";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, useLocation, createSearchParams } from "react-router-dom";
import axios from "axios";

const MovieForm = ({ closePortal, title, httpReq, movieData }) => {
	const { search } = useLocation();
	const url = createSearchParams(search).toString();
	const finalUrl = `/?${url}`;
	const navigate = useNavigate();

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
					title: movieData?.title || "",
					release_date: movieData
						? new Date(movieData?.release_date)
						: "",
					poster_path: movieData?.poster_path || "",
					vote_average: movieData?.vote_average || "",
					genres: convertGenresToObjArr(movieData?.genres) || "",
					runtime: movieData?.runtime || "",
					overview: movieData?.overview || "",
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
					if (!values.vote_average) {
						errors.vote_average = "Please enter the movie rating";
					} else if (
						values.vote_average < 1 ||
						values.vote_average > 10
					) {
						errors.vote_average = "Rating must be between 1 and 10";
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					if (httpReq && httpReq === "POST") {
						const transformedMovieObject =
							transformMovieObject(values);
						axios
							.post(
								"http://localhost:4000/movies",
								transformedMovieObject
							)
							.then((response) => {
								alert(
									"The movie has been added ti the database successfully!"
								);
								navigate(finalUrl);
							})
							.catch((error) => {
								console.error("Error:", error);
							});
						setSubmitting(false);
					}
					if (httpReq && httpReq === "PUT") {
						const movieValuesCombined = combineObjects(
							movieData,
							values
						);
						const transformedGenreObject =
							transformMovieObject(movieValuesCombined);
						axios
							.put(
								"http://localhost:4000/movies",
								transformedGenreObject
							)
							.then((response) => {
								alert("Movie updated successfully!");
								navigate(finalUrl);
							})
							.catch((error) => {
								console.error("Error:", error);
							});
						setSubmitting(false);
					}
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
								<ErrorMessage
									component="div"
									className="formik-error-message"
									name="title"
								/>
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
								<ErrorMessage
									name="poster_path"
									component="div"
									className="formik-error-message"
								/>
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
								<ErrorMessage
									name="vote_average"
									component="div"
									className="formik-error-message"
								/>
							</div>
							<div className="form-group">
								<label
									htmlFor="genre"
									className="form-group__label"
								>
									Genre:
								</label>
								{/* <Field
									as={Select}
									name="genres"
									isMulti
									options={options}
									styles={SelectStyles}
									onChange={(option) => {
										return formik.setFieldValue(
											"genres",
											option
										);
									}}
								/> */}
								<Field
									as={Select}
									name="genres"
									isMulti
									styles={SelectStyles}
									onChange={(option) => {
										return formik.setFieldValue(
											"genres",
											option
										);
									}}
									options={options}
								/>
								<ErrorMessage
									name="genres"
									component="div"
									className="formik-error-message"
								/>
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
								<ErrorMessage
									name="runtime"
									component="div"
									className="formik-error-message"
								/>
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
								<ErrorMessage
									name="overview"
									component="div"
									className="formik-error-message"
								/>
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
