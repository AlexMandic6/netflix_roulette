import Logo from "@/components/Logo/Logo";
import Image from "next/image";
import Link from "next/link";
import extractYearFromDate from "@/utils/extractYearFromDate";
import formatTime from "@/utils/formatTime";
import formatGenres from "@/utils/formatGenres";

const { NEXT_PUBLIC_MOVIES_API_KEY } = process.env;

const fallbackPosterUrl =
	"https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";

const page = async ({ params }) => {
	console.log("paramsid:", params);
	const movieUrl = `${NEXT_PUBLIC_MOVIES_API_KEY}/${params.id}`;
	const response = await fetch(movieUrl);
	const movieData = await response.json();

	return (
		<div className="px-16 mt-3 bg-neutral-800 pb-7 pt-9">
			<header className="flex justify-between mb-8">
				<Logo />
				<Link href="/" className="bg-neutral-800">
					<Image
						src="/search-button.svg"
						alt="search button"
						width={28}
						height={28}
					/>
				</Link>
			</header>
			<div className="flex gap-14">
				<div className="min-w-[260px] basis-1/3">
					<img src={movieData.poster_path} alt="" />
				</div>
				<div className="basis-2/3">
					<h1 className="mb-2 text-4xl font-light text-white">
						{movieData.title} <span>{movieData.vote_average}</span>
					</h1>
					<p className="text-sm font-medium text-neutral-400 mb-7">
						{formatGenres(movieData.genres)}
					</p>
					<div className="flex gap-12 mb-7">
						<h4 className="text-2xl font-light text-rose-500">
							{extractYearFromDate(movieData.release_date)}
						</h4>
						<h4 className="text-2xl font-light text-rose-500">
							{formatTime(movieData.runtime)}
						</h4>
					</div>
					<p className="text-xl font-medium text-neutral-400 mb-7">
						{movieData.overview}
					</p>
				</div>
			</div>
		</div>
	);
};

export default page;
