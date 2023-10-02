const formatGenres = (genres) => {
	if (genres?.length) {
		const formattedGenres =
			genres.length === 1
				? genres[0]
				: genres.slice(0, -1).join(", ") +
				  (genres.length === 2 ? " & " : ", ") +
				  genres.slice(-1)[0];

		return formattedGenres;
	}
	return "No genres available.";
};

export default formatGenres;
