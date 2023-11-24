import MovieForm from "components/MovieForm/MovieForm";
import { PortalWithState } from "react-portal";
import {
	Navigate,
	useLocation,
	createSearchParams,
	useLoaderData,
} from "react-router-dom";

const EditMovieForm = () => {
	const movieData = useLoaderData();
	const { search } = useLocation();
	const url = createSearchParams(search).toString();
	const finalUrl = `/?${url}`;
	return (
		<PortalWithState closeOnEsc defaultOpen>
			{({ closePortal, isOpen, portal }) => (
				<>
					{!isOpen && <Navigate to={finalUrl} replace={true} />}
					{isOpen &&
						portal(
							<MovieForm
								closePortal={closePortal}
								title="Edit Movie"
								httpReq="PUT"
								movieData={movieData}
							/>
						)}
				</>
			)}
		</PortalWithState>
	);
};

export default EditMovieForm;
