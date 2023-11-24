import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Dialog from "./Dialog";

describe("Dialog Component", () => {
	it("renders with title and placeholder in input", () => {
		const title = "Title:";
		const placeholder = "Title";

		render(
			<Dialog>
				<div className="form-group">
					<label htmlFor="title" className="form-group__label">
						{title}
					</label>
					<input
						type="text"
						id="title"
						name="title"
						className="form-group__input"
						placeholder={placeholder}
						required
					/>
				</div>
			</Dialog>
		);

		expect(screen.getByText(title)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
	});

	it("calls closePortal when close button is clicked", () => {
		const closePortalMock = jest.fn();
		const title = "Title:";

		render(
			<Dialog
				title={title}
				onClose={closePortalMock}
				closePortal={closePortalMock}
			>
				<div>test</div>
				<button data-testid="close-button"></button>
			</Dialog>
		);

		expect(screen.getByTestId("close-button")).toBeTruthy();

		userEvent.click(screen.getByTestId("close-button"));

		setTimeout(() => {
			expect(closePortalMock).toHaveBeenCalled();
		}, 1000);
	});
});
