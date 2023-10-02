import { render } from "@testing-library/react";
import MovieTile from "./MovieTile";

const mockMovieData = {
	poster_path:
		"https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
	title: "Tomb Raider",
	release_date: "2021-09-27",
	genres: ["Action", "Adventure", "Fantasy"],
};

test("renders MovieTile component correctly", () => {
	const { asFragment } = render(<MovieTile movieData={mockMovieData} />);
	expect(asFragment()).toMatchSnapshot();
});
