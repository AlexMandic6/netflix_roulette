import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "./SearchForm";

describe("SearchForm Component", () => {
	it("should render an input with the value equal to initial value passed in props", () => {
		const initialValue = "Initial Value";
		render(<SearchForm searchTerm={initialValue} onSearch={() => {}} />);

		const inputElement = screen.getByPlaceholderText(
			"What do you want to watch?"
		);
		expect(inputElement.value).toBe(initialValue);
	});

	it("should call the 'onSearch' prop with proper value after pressing Enter key", () => {
		const onChangeMock = jest.fn();
		render(<SearchForm searchTerm="" onSearch={onChangeMock} />);

		const inputElement = screen.getByPlaceholderText(
			"What do you want to watch?"
		);
		const searchValue = "John Wick";

		fireEvent.change(inputElement, { target: { value: searchValue } });
		fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

		expect(onChangeMock).toHaveBeenCalledWith(searchValue);
	});
});
