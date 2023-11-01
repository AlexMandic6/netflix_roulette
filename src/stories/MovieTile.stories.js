import { action } from "@storybook/addon-actions";
import MovieTile from "../components/MovieTile/MovieTile";

export default {
	title: "Components/MovieTile",
	component: MovieTile,
};

const sampleMovieData = {
	title: "Tomb Raider",
	poster_path:
		"https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
	release_date: "2023-09-27",
	genres: ["Action", "Adventure", "Fantasy"],
};

const Template = (args) => <MovieTile {...args} />;

export const Default = Template.bind({});
Default.args = {
	movieData: sampleMovieData,
	onClick: action("Movie clicked"),
};
