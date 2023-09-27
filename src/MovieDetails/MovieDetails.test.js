import React from "react";
import { render } from "@testing-library/react";
import MovieDetails from "./MovieDetails";

jest.mock("../Logo.js/Logo", () => () => <div>Mocked Logo</div>);

const mockMovieDetail = {
	poster_path:
		"https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
	title: "Tomb Raider",
	vote_average: 7.5,
	genres: ["Action", "Adventure", "Fantasy"],
	release_date: "2021-09-27",
	runtime: 160,
	overview:
		"Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits...",
};

test("renders MovieDetails component correctly", () => {
	const { asFragment } = render(
		<MovieDetails movieDetail={mockMovieDetail} />
	);
	expect(asFragment()).toMatchSnapshot();
});
