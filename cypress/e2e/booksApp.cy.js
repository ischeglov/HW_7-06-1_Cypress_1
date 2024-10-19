describe("application login tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("login test", () => {
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should("be.visible", true);
  });

  it("empty password", () => {
    cy.login("test@test.com", null);
    cy.get("#pass").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
    });
  });

  it("empty mail", () => {
    cy.login(null, "test");
    cy.get("#mail").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
    });
  });
});

describe("application add books", () => {
  it("add book", () => {
    cy.signIn();
    cy.contains("Add new").click();
    cy.get("#title").type("Изучаем Java");
    cy.get("#description").type("Руководство для начинающих");
    cy.get("#authors").type("Кэти Сьерра");
    cy.contains("Submit").click();
  });

  it("add to favorite book", () => {
    cy.signIn();
    cy.get(
      '[href="book/4a5d7c98-136f-47eb-8fe9-26ef31ec137b"] > .h-100 > .card-footer > .btn'
    ).click();
    cy.contains("Favorites").click();
    cy.contains("Изучаем Java").should("be.visible", true);
  });

  it("delete to favorite book", () => {
    cy.signIn();
    cy.contains("Favorites").click();
    cy.get(".card-footer > .btn").click();
    cy.contains("Please add some book to favorit on home page!").should(
      "be.visible",
      true
    );
  });
});