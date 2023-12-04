import { Helper } from "../../../common/Helper";
import { Method } from "../helper/Method";

const method = new Method();
const helper = new Helper();


describe('Countries test', () => {
    it('should be able to create country', () => {

        let countryCode = helper.generateRandom(5);

        cy.loginWithTokenSeedtrack();
        cy.visit(`${Cypress.env('SEEDTRACK_APP_HOST')}/dashboard`);
        cy.reload();
        cy.visit(`${Cypress.env('SEEDTRACK_APP_HOST')}/master/countries`);
        cy.wait(5000);
        method.clickBtnHamburger();
        cy.wait(1000);
        method.clickBtnAddCountry();
        cy.wait(1000);
        method.clickInputCountryName();
        method.typeCountryName('Test Country - ' + countryCode);
        method.clickInputCountryCode();
        method.typeCountryCode(countryCode);
        method.clickSelectParent();
        method.pressEnter();
        method.clickBtnCreateCountry();
        cy.wait(500);
        method.clickBtnPopupYes();
    });
});