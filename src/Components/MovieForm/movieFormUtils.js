const urlPattern =
	/^https:\/\/image\.tmdb\.org\/t\/p\/w\d+\/[a-zA-Z0-9]+\.(jpg|jpeg|png)$/;

export function isUrlValid(url) {
	return urlPattern.test(url);
}

export function transformMovieObject(movieObject) {
	const transformedGenres = movieObject.genres.map((genre) => genre.label);

	return {
		...movieObject,
		vote_average: Number(movieObject.vote_average),
		genres: transformedGenres,
	};
}
