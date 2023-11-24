import MovieTile from "components/MovieTile/MovieTile";
import "./Movies.css";

const Movies = ({ moviesData }) => {
	const movieList = [...moviesData].map((movie) => {
		const {
			poster_path,
			title,
			release_date,
			genres,
			runtime,
			overview,
			vote_average,
			id,
		} = movie;

		const movieData = {
			poster_path,
			title,
			release_date,
			genres,
			runtime,
			overview,
			vote_average,
			id,
		};
		return (
			<li key={movie.id}>
				<MovieTile movieData={movieData} />
			</li>
		);
	});

	return (
		<div>
			<ul className="movies__list">
				{movieList.length > 0 ? movieList : <p>No movies available.</p>}
			</ul>
		</div>
	);
};

export default Movies;
