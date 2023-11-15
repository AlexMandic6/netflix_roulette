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

export function convertGenresToObjArr(genres) {
	if (!genres) return;
	return genres.map((genre) => ({
		value: genre.toLowerCase(),
		label: genre.charAt(0).toUpperCase() + genre.slice(1),
	}));
}

export function combineObjects(obj1, obj2) {
	const combinedObject = {};

	for (const key in obj1) {
		if (obj1.hasOwnProperty(key)) {
			combinedObject[key] =
				key === "genres"
					? obj2.hasOwnProperty(key) && Array.isArray(obj2[key])
						? obj2[key]
						: obj1[key]
					: obj2.hasOwnProperty(key)
					? obj2[key]
					: obj1[key];
		}
	}

	for (const key in obj2) {
		if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key)) {
			combinedObject[key] = obj2[key];
		}
	}

	if (!combinedObject.hasOwnProperty("tagline") || !combinedObject.tagline) {
		combinedObject.tagline = "Tagline is missing...";
	}

	return combinedObject;
}
