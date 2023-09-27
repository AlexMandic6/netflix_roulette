import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SortControl from "../SortControl/SortControl";

test("renders SortControl component correctly", () => {
	const { asFragment, getByLabelText } = render(<SortControl />);
	expect(asFragment()).toMatchSnapshot();

	const sortLabel = getByLabelText("Sort By:");
	expect(sortLabel).toBeInTheDocument();
});

test("handles select change correctly", () => {
	const { getByTestId } = render(<SortControl />);
	const selectElement = getByTestId("sort-select");

	fireEvent.change(selectElement, { target: { value: "title" } });
	expect(selectElement.value).toBe("title");

	fireEvent.change(selectElement, { target: { value: "release-date" } });
	expect(selectElement.value).toBe("release-date");
});
