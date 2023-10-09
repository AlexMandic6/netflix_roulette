import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
	it("counter displays correct initial count", () => {
		render(<Counter initialCount={0} />);
		const countValue = screen.getByTestId("count").textContent;
		expect(countValue).toEqual(`Counter: 0`);
	});

	it("count should increment by 1 if increment buttton is clicked", () => {
		render(<Counter initialCount={0} />);
		const incrementBtn = screen.getByRole("button", { name: "+" });
		const countValueBefore = screen.getByTestId("count").textContent;
		expect(countValueBefore).toEqual(`Counter: 0`);
		userEvent.click(incrementBtn);
		const countValueAfter = screen.getByTestId("count").textContent;
		expect(countValueAfter).toEqual(`Counter: 1`);
	});

	it("count should decrement by 1 if decrement buttton is clicked", () => {
		render(<Counter initialCount={0} />);
		const decrementBtn = screen.getByRole("button", { name: "-" });
		const countValueBefore = screen.getByTestId("count").textContent;
		expect(countValueBefore).toEqual(`Counter: 0`);
		userEvent.click(decrementBtn);
		const countValueAfter = screen.getByTestId("count").textContent;
		expect(countValueAfter).toEqual(`Counter: -1`);
	});
});
