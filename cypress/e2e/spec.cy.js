describe("Genres Component", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");

		it("should display 'No genres available' when no movies are provided", () => {
			cy.get(".genres p").should("contain", "No genres available.");
		});
	});

	it("should display genre buttons when movies are provided", () => {
		// Verify that genre buttons are displayed.
		cy.get(".genres__list li").should("have.length.above", 0);
	});

	it("should highlight the selected genre", () => {
		// Click on a genre button to select it.
		cy.get(".genre").contains("Drama").click();

		// Verify that the selected genre is highlighted.
		cy.get(".genre").contains("Drama").should("have.class", "active");
	});
});
