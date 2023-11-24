const formatTime = (minutes) => {
	if (typeof minutes !== "number" || isNaN(minutes) || minutes < 0) {
		return;
	}

	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;

	if (hours > 0 && remainingMinutes > 0) {
		return `${hours}h ${remainingMinutes}min`;
	} else if (hours > 0) {
		return `${hours}h`;
	} else {
		return `${remainingMinutes}min`;
	}
};

export default formatTime;
