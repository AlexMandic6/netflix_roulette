const extractYearFromDate = (dateString) => {
	if (!dateString) return null;

	const [year] = dateString.split("-");
	return year;
};

export default extractYearFromDate;
