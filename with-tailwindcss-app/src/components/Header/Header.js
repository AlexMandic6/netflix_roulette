"use client";

import Logo from "@/components/Logo/Logo";
// import { useRouter } from "next/navigation";
import SearchForm from "@/components/SearchForm/SearchForm";
// import { useLocation, createSearchParams } from "react-router-dom";
import Link from "next/link";

const Header = () => {
	// console.log(router);
	return (
		<div className="mb-3 px-16 py-5 min-h-[396px] bg-cover bg-center-center bg-hero">
			<div className="flex justify-between mb-9">
				<Logo />
				<Link
					href="/new"
					className="px-5 py-3 text-xl font-semibold uppercase text-rose-500 bg-zinc-600/60 hover:bg-zinc-600/90"
				>
					+ Add Movie
				</Link>
			</div>
			<div className="py-0 px-28">
				<h1 className="text-5xl font-light text-white uppercase mb-9">
					Find your movie
				</h1>
				<SearchForm />
			</div>
		</div>
	);
};

export default Header;
