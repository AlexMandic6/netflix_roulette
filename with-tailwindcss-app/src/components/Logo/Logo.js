import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	return (
		<Link href="/">
			<Image
				src="/netflix-roulette-logo.svg"
				alt="netflix roulette logo"
				width="150"
				height="24"
			/>
		</Link>
	);
};

export default Logo;
