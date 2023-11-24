import Genres from "../containers/genresContainer/Genres/Genres";
import SortControl from "../components/SortControl/SortControl";
import Movies from "@/containers/moviesContainer/Movies/Movies";
import MoviesWrapper from "@/containers/moviesContainer/MoviesWrapper/MoviesWrapper";

const { NEXT_PUBLIC_MOVIES_API_KEY } = process.env;

const MovieListPage = async () => {
	const url = `${NEXT_PUBLIC_MOVIES_API_KEY}?limit=30`;
	const response = await fetch(url);
	const moviesData = response.json();

	return (
		<>
			<MoviesWrapper>
				<div className="flex justify-between gap-6 mb-7">
					<Genres genreData={moviesData} />
					<SortControl />
				</div>
				<Movies moviesData={moviesData} />
			</MoviesWrapper>
		</>
	);
};

export default MovieListPage;
