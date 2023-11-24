"use client";

// const page = ({ params, searchParams }) => {
// 	console.log(params, searchParams);
// 	return <div>NEW ROUTE!</div>;
// };

// export default page;
import MovieForm from "@/components/MovieForm/MovieForm";
import { PortalWithState } from "react-portal";

const AddMovieForm = () => {
	// const { search } = useLocation();
	// const url = createSearchParams(search).toString();
	// const finalUrl = `/?${url}`;
	return (
		<PortalWithState closeOnEsc defaultOpen>
			{({ closePortal, isOpen, portal }) => (
				<>
					{/* {!isOpen && <Navigate to={finalUrl} replace={true} />} */}
					{isOpen &&
						portal(
							<MovieForm
								closePortal={closePortal}
								title="Add Movie"
								httpReq="POST"
							/>
						)}
				</>
			)}
		</PortalWithState>
	);
};

export default AddMovieForm;
