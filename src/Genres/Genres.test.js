import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Genres from "./Genres";

describe("Genres Component", () => {
	it("renders all genres passed in props", () => {
		const allMovies = [
			{ genres: ["Action", "Adventure"] },
			{ genres: ["Comedy", "Drama"] },
		];
		const selectedGenre = "Action";

		render(
			<Genres
				allMovies={allMovies}
				onSelect={() => {}}
				selectedGenre={selectedGenre}
			/>
		);

		const genreButtons = screen.getAllByRole("button");
		expect(genreButtons).toHaveLength(5); // 2 genres + "all" + 1 active genre
		expect(screen.getByText("Action")).toBeInTheDocument();
		expect(screen.getByText("Adventure")).toBeInTheDocument();
		expect(screen.getByText("Comedy")).toBeInTheDocument();
		expect(screen.getByText("Drama")).toBeInTheDocument();
	});

	it("highlights a selected genre passed in props", () => {
		const allMovies = [
			{ genres: ["Action", "Adventure"] },
			{ genres: ["Comedy", "Drama"] },
		];
		const selectedGenre = "Action";

		render(
			<Genres
				allMovies={allMovies}
				onSelect={() => {}}
				selectedGenre={selectedGenre}
			/>
		);

		const activeGenreButton = screen.getByText("Action");
		expect(activeGenreButton).toHaveClass("active");
	});
});
