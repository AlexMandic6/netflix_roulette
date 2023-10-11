import React, { useState } from "react";
import SearchForm from "SearchForm/SearchForm";
import SearchButton from "SearchButton/SearchButton";
import Logo from "Components/Logo/Logo";
import Button from "Components/Button/Button";
import MovieForm from "MovieForm/MovieForm";
import { PortalWithState } from "react-portal";

import "./Header.css";

const Header = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const onSearch = (searchTerm) => {
		setSearchTerm(searchTerm);
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
				<div className="search__form">
					<SearchForm searchTerm={searchTerm} onSearch={onSearch} />
					<SearchButton searchTerm={searchTerm} onSearch={onSearch} />
				</div>
			</div>
		</div>
	);
};

export default Header;
