import { action } from "@storybook/addon-actions";
import MovieDetails from "../MovieDetails/MovieDetails";

export default {
	title: "Components/MovieDetails",
	component: MovieDetails,
};

const movieSample = {
	poster_path:
		"https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
	title: "Tomb Raider",
	vote_average: 6.2,
	genres: ["Action", "Adventure", "Fantasy"],
	release_date: "2023-09-27",
	runtime: 150,
	overview:
		"Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
};

const Template = (args) => <MovieDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
	movieDetail: movieSample,
	searchMovie: action("Search movie clicked"),
};
