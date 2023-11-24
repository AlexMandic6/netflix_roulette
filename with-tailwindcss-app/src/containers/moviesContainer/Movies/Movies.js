"use client";

import MovieTile from "@/components/MovieTile/MovieTile";

const Movies = ({ moviesData }) => {
	const moviesDataObj = JSON.parse(moviesData.value);
	const movies = moviesDataObj.data;

	const movieList = [...movies].map((movie) => {
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
			<ul className="grid grid-cols-3 gap-14">
				{movieList.length > 0 ? movieList : <p>No movies available.</p>}
			</ul>
		</div>
	);
};

export default Movies;
