import SearchForm from "components/SearchForm/SearchForm";
import Logo from "components/Logo/Logo";
import Button from "components/Button/Button";
import MovieForm from "components/MovieForm/MovieForm";
import { PortalWithState } from "react-portal";
import { Outlet } from "react-router-dom";
import "./Header.css";
import { NavLink, useLocation, createSearchParams } from "react-router-dom";

const Header = () => {
	const { search } = useLocation();
	const url = createSearchParams(search).toString();
	const finalUrl = `/new?${url}`;
	return (
		<div className="search">
			<div className="search__logo">
				<Logo />
				<NavLink to={finalUrl} className="dialog-btn">
					+ Add movie
				</NavLink>
			</div>
			<div className="search__form__wrapper">
				<h1 className="search__title">Find your movie</h1>
				<SearchForm />
				<Outlet />
			</div>
		</div>
	);
};

export default Header;
