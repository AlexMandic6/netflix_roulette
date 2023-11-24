// import "./MovieTile.css";
// import Dropdown from "@/components/Dropdown/Dropdown";
import extractYearFromDate from "@/utils/extractYearFromDate";
import formatGenres from "@/utils/formatGenres";
import Link from "next/link";
import Image from "next/image";

const MovieTile = ({ movieData }) => {
	const { id } = movieData;

	const fallbackPosterUrl =
		"https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";

	return (
		<>
			<div className="cursor-pointer w-fit">
				<div className="relative">
					{/* <Dropdown id={movieData.id} /> */}

					{/* <Link href={id}>
						<img
							src={movieData?.poster_path}
							data-id={movieData.id}
							onError={(e) => {
								e.target.src = fallbackPosterUrl;
								e.target.classList.add("poster__fallback");
							}}
							alt={movieData?.title}
						/>
					</Link> */}
					<Link href={`/${movieData?.id}`}>
						<Image
							src={movieData?.poster_path}
							data-id={movieData.id}
							alt={movieData?.title}
							width={325}
							height={490}
						/>
					</Link>
				</div>
				<div className="flex justify-between gap-2 mt-5">
					<h3 className="mb-2 text-stone-300">
						{movieData?.title || `No Title Available.`}
					</h3>
					<p className="self-start px-2 py-1 rounded outline outline-1 outline-stone-300">
						{extractYearFromDate(movieData.release_date)}
					</p>
				</div>
			</div>
			<p className="text-neutral-400">
				{formatGenres(movieData?.genres)}
			</p>
		</>
	);
};

export default MovieTile;
