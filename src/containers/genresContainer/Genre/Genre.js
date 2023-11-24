import "./Genre.css";
import Button from "components/Button/Button";
import { useSearchParams } from "react-router-dom";

const Genre = ({ genre }) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const selectedGenre = searchParams.get("filter") || "all";

	const buttonClassName = `genre ${genre === selectedGenre ? "active" : ""}`;

	const handleClick = () => {
		setSearchParams((searchParams) => {
			searchParams.set("filter", genre);
			return searchParams;
		});
	};

	return (
		<Button
			onClick={handleClick}
			buttonClass={buttonClassName}
			buttonText={genre}
		/>
	);
};

export default Genre;
