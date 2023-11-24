import "./globals.css";
import { Montserrat } from "@next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({
	weights: [300, 400, 500, 700],
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Netflix roulette",
	description: "Movie review app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
