describe("Router test", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});

	it("check if there is no URL params", () => {
		cy.url().should("not.contain", "?");
	});

	it("sort results and check for URL param + reload the page", () => {
		cy.get(".sort-by").select("title");
		cy.get(".movies__list").should("be.visible");
		cy.url().should("contain", "?sortBy=title");
		cy.reload();
		cy.url().should("contain", "?sortBy=title");
	});

	it("select genre and check URL params + reload the page", () => {
		cy.get(".genres__list").contains("Adventure").click();
		cy.get(".genre").contains("Adventure").should("have.class", "active");
		cy.url().should("contain", "?filter=Adventure");
		cy.reload();
		cy.url().should("contain", "?filter=Adventure");
	});

	it("search for a movie and check URL params + page reload", () => {
		const movie = "Tomb Raider";
		cy.get(".search-form__input").click().type(`${movie}{enter}`);

		cy.get(".movies__list").should("be.visible");
		cy.contains(".movies__list", movie);
		cy.url().should("contain", "?search=Tomb+Raider");
		cy.reload();
		cy.url().should("contain", "?search=Tomb+Raider");
	});
});
