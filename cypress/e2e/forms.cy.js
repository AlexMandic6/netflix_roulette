import "cypress-real-events";

describe("Formik forms test", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});

	it("opens add movie form when + Add Movie button is clicked", () => {
		cy.get(".dialog-btn").click();
		cy.url().should("contain", "/new");
		cy.get(".dialog").should("be.visible");
		cy.get(".form-group").should("be.visible");
		cy.get('input[name="title"]').should("have.value", "");
		cy.get('input[name="release_date"]').should("have.value", "");
		cy.get('input[name="poster_path"]').should("have.value", "");
		cy.get('input[name="vote_average"]').should("have.value", "");
		cy.get('input[id="react-select-3-input"]').should("have.value", "");
		cy.get('input[name="runtime"]').should("have.value", "");
		cy.get('textarea[name="overview"]').should("have.value", "");
	});

	it("Navigate to the edit page and check for input initial values", () => {
		cy.get(".poster").first().as("firstMovieTile");
		cy.get("@firstMovieTile")
			.realHover()
			.find(".menu")
			.click()
			.get("@firstMovieTile")
			.find(".dropdown__btn")
			.contains("Edit")
			.click();

		cy.url().should("include", "/edit");
		cy.get(".dialog").should("be.visible");
		cy.get(".form-group").should("be.visible");
		cy.get('input[name="title"]').should("not.have.value", "");
		cy.get('input[name="release_date"]').should("not.have.value", "");
		cy.get('input[name="poster_path"]').should("not.have.value", "");
		cy.get('input[name="vote_average"]').should("not.have.value", "");
		cy.get('input[id="react-select-3-input"]').should("be.visible");
		cy.get('input[name="runtime"]').should("not.have.value", "");
		cy.get('textarea[name="overview"]').should("not.have.value", "");
	});

	it("adds a movie to database and checks it submit is succesful", () => {
		cy.get(".dialog-btn").click();
		cy.url().should("contain", "/new");
		cy.get(".dialog").should("be.visible");
		cy.get(".form-group").should("be.visible");
		cy.get('input[name="title"]')
			.type("New Movie Title")
			.should("have.value", "New Movie Title");
		cy.get('input[name="release_date"]')
			.click()
			.get(".react-datepicker__month")
			.get(".react-datepicker__week")
			.first()
			.click();
		cy.get('input[name="release_date"]').should("have.value", "2023-11-01");

		cy.get('input[name="poster_path"]')
			.type(
				"https://image.tmdb.org/t/p/w500/30oXQKwibh0uANGMs0Sytw3uN22.jpg"
			)
			.should(
				"have.value",
				"https://image.tmdb.org/t/p/w500/30oXQKwibh0uANGMs0Sytw3uN22.jpg"
			);
		cy.get('input[name="vote_average"]')
			.type("6.5")
			.should("have.value", "6.5");
		cy.get('input[id="react-select-3-input"]')
			.click()
			.get("#react-select-3-listbox")
			.first()
			.click();
		cy.get('input[name="runtime"]').type("123").should("have.value", "123");
		cy.get('textarea[name="overview"]')
			.type("New Movie Description test")
			.should("have.value", "New Movie Description test");
		cy.get('button.btn-primary[type="submit"]').click();
		cy.wait(1000);
		cy.url().should("not.contain", "/new");
	});

	it("search for a movie and check URL params", () => {
		const movie = "New Movie Title";
		cy.get(".search-form__input").click().type(`${movie}{enter}`);

		cy.get(".movies__list").should("be.visible");
		cy.contains(".movies__list", movie);
		cy.url().should("contain", "?search=New+Movie+Title");
	});
});
