import React, { useState } from "react";
import "./Dropdown.css";

import MovieForm from "components/MovieForm/MovieForm";
import { PortalWithState } from "react-portal";

const Dropdown = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleDropdown = () => {
		setIsActive(!isActive);
	};

	return (
		<div
			className={`menu ${isActive ? "active" : ""}`}
			onClick={toggleDropdown}
		>
			<figure></figure>
			<figure className={`middle ${isActive ? "active" : ""}`}></figure>
			<p className={`cross ${isActive ? "active" : ""}`}>x</p>
			<figure></figure>
			<ul className={`dropdown ${isActive ? "active" : ""}`}>
				<PortalWithState closeOnEsc>
					{({ openPortal, closePortal, isOpen, portal }) => (
						<>
							<li>
								<button onClick={openPortal}>Edit</button>
							</li>
							{isOpen &&
								portal(
									<MovieForm
										closePortal={closePortal}
										title="Edit Movie"
									/>
								)}
						</>
					)}
				</PortalWithState>
				<PortalWithState closeOnEsc>
					{({ openPortal, closePortal, isOpen, portal }) => (
						<>
							<li>
								<button onClick={openPortal}>Delete</button>
							</li>
							{isOpen &&
								portal(
									<MovieForm
										closePortal={closePortal}
										title="Delete Movie"
									/>
								)}
						</>
					)}
				</PortalWithState>
			</ul>
		</div>
	);
};

export default Dropdown;
