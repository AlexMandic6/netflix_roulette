"use client";

import Genre from "../Genre/Genre";

const Genres = ({ genreData }) => {
	const genresDataObj = JSON.parse(genreData.value);
	const genresData = genresDataObj.data;
	const allGenres = genresData.flatMap((data) => data.genres);
	const genres = ["all", ...new Set(allGenres)];

	if (!genres?.length) {
		return <p>No genres available.</p>;
	}

	const genreButtons = genres.map((genre) => (
		<li key={genre}>
			<Genre genre={genre} />
		</li>
	));
	return (
		<div className="relative">
			<ul className="flex flex-wrap gap-7">{genreButtons}</ul>
		</div>
	);
};

export default Genres;
