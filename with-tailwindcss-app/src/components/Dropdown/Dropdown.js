import React, { useState } from "react";
// import "./Dropdown.css";
// import { useLocation, createSearchParams } from "react-router-dom";
// import Link from "next/link";

const Dropdown = ({ id }) => {
	const [isActive, setIsActive] = useState(false);

	// const { search } = useLocation();
	// const url = createSearchParams(search).toString();
	// const finalUrl = `/${id}/edit?${url}`;

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
				{/* <Link href={finalUrl} className="dropdown__btn">
					Edit
				</Link> */}
				{/* TODO: add delete functionality */}
				<li className="dropdown__btn">Delete</li>
			</ul>
		</div>
	);
};

export default Dropdown;
