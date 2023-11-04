describe("Functional test", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});

	it("searches for a movie", () => {
		const movie = "Tomb Raider";
		cy.get(".search-form__input").click().type(`${movie}{enter}`);

		cy.get(".movies__list").should("be.visible");
		cy.contains(".movies__list", movie);
	});

	it("sorts search results", () => {
		cy.get(".sort-by").select("title");
		cy.get(".movies__list").should("be.visible");
	});

	it("switches through genres", () => {
		cy.get(".genres__list").contains("Adventure").click();
		cy.get(".genre").contains("Adventure").should("have.class", "active");
		cy.get(".genres__list").contains("all").click();
		cy.get(".genre").contains("all").should("have.class", "active");
	});

	it("selects a movie, check for details and returns to search", () => {
		cy.get(".poster__img").first().click();
		cy.get(".movie-details__main").should("be.visible");
		cy.get(".search").should("not.exist");
		cy.get(".movie-details__search").click();
		cy.get(".movie-details__main").should("not.exist");
		cy.get(".search").should("be.visible");
	});
});
