import SearchForm from "SearchForm/SearchForm";
import Logo from "Components/Logo/Logo";
import Button from "Components/Button/Button";
import MovieForm from "MovieForm/MovieForm";
import { PortalWithState } from "react-portal";
import "./Header.css";

const Header = ({ onSearchedMovie }) => {
	const onSearch = (searchTerm) => {
		onSearchedMovie(searchTerm);
	};
	return (
		<div className="search">
			<div className="search__logo">
				<Logo />
				<PortalWithState closeOnEsc>
					{({ openPortal, closePortal, isOpen, portal }) => (
						<>
							<Button
								onClick={openPortal}
								buttonClass="dialog-btn"
								buttonText="+ Add movie"
							/>
							{isOpen &&
								portal(
									<MovieForm
										closePortal={closePortal}
										title="Add Movie"
									/>
								)}
						</>
					)}
				</PortalWithState>
			</div>
			<div className="search__form__wrapper">
				<h1 className="search__title">Find your movie</h1>
				<SearchForm onSearch={onSearch} />
			</div>
		</div>
	);
};

export default Header;
