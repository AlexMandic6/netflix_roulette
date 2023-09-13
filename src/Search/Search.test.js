import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";

describe("Search Component", () => {
	it("should call 'onSearch' prop with the proper value when clicking the Submit button", () => {
		render(<Search />);
		const inputElement = screen.getByPlaceholderText(
			"What do you want to watch?"
		);
		const buttonElement = screen.getByText("Search");

		fireEvent.change(inputElement, { target: { value: "John Wick" } });
		fireEvent.click(buttonElement);

		// Find the input element again to access its value
		const updatedInput = screen.getByPlaceholderText(
			"What do you want to watch?"
		);

		// Assert that the onSearch prop is called with the updated input value
		expect(updatedInput.value).toBe("John Wick");
	});
});
