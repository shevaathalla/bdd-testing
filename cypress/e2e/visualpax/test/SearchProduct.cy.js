import { Method } from "../helper/Method";

const method = new Method();

describe('Search Product', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("VISUALPAX_APP_HOST"));
    });

    it('Able to search product', () => {
        method.clickSearchBox();
        method.typeSearchBox('Buah');
        method.pressEnter();
        cy.wait(2000);
        method.getTextProduct('Buah');
        // cy.get('.search-result').should('be.visible');
    });
});   