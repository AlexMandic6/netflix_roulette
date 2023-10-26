import MovieTile from "MovieTile/MovieTile";
import "./Movies.css";

const Movies = ({ moviesData, onMoveDetail }) => {
	const movieList = [...moviesData].map((movie) => {
		const {
			poster_path,
			title,
			release_date,
			genres,
			runtime,
			overview,
			vote_average,
		} = movie;

		const movieData = {
			poster_path,
			title,
			release_date,
			genres,
			runtime,
			overview,
			vote_average,
		};
		return (
			<li key={movie.id}>
				<MovieTile movieData={movieData} onMoveDetail={onMoveDetail} />
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
