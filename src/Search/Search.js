import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import SearchButton from "../SearchButton/SearchButton";
import Logo from "../Logo.js/Logo";
import Dialog from "../Dialog/Dialog";
import CloseIcon from "../CloseIcon/CloseIcon";
import Button from "../Button/Button";
import { PortalWithState } from "react-portal";

import "./Search.css";

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const onSearch = (searchTerm) => {
		setSearchTerm(searchTerm);
	};
	return (
		<div className="search">
			<div className="search__logo">
				<Logo />
				<PortalWithState closeOnOutsideClick closeOnEsc>
					{({ openPortal, closePortal, isOpen, portal }) => (
						<>
							<Button
								onClick={openPortal}
								buttonClass="dialog-btn"
								buttonText="+ Add movie"
							/>
							{isOpen &&
								portal(
									<Dialog
										children={
											<>
												<div className="dialog__header">
													<h2 className="dialog__title">
														This is a simple dialog.
													</h2>
													<Button
														onClick={closePortal}
														buttonClass="dialog__close-btn"
														buttonText={
															<CloseIcon />
														}
													/>
												</div>
												<p className="dialog__text">
													Lorem ipsum dolor sit amet
													consectetur adipisicing
													elit. Necessitatibus
													repellendus obcaecati
													asperiores voluptatem iste a
													culpa sunt placeat molestias
													porro!
												</p>
											</>
										}
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

export default Search;
