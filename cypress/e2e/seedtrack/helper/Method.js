import { Locator } from "./Locator";


const locator = new Locator();

export class Method{

    clickBtnHamburger(){
        cy.get(locator.btnHamburger).click({force: true});
    }

    clickBtnAddCountry(){
        cy.get(locator.btnAddCountry).click({force: true});
    }

    clickInputCountryName(){
        cy.get(locator.inputCountryName).click({force: true});
    }

    typeCountryName(text){
        cy.get(locator.inputCountryName).type(text, {force: true});
    }

    clickInputCountryCode(){
        cy.get(locator.inputCountryCode).click({force: true});
    }

    typeCountryCode(text){
        cy.get(locator.inputCountryCode).type(text, {force: true});
    }

    clickSelectParent(){
        cy.get(locator.selectCountryParent).click({force: true});
    }

    clickBtnCreateCountry(){
        cy.get(locator.btnCreateCountry).click({force:true});
    }

    pressEnter(){
        cy.get(locator.selectCountryParent).type('{downArrow}{enter}');
    }

    clickBtnPopupYes(){
        cy.get(locator.btnPopupYes).click({force: true});
    }
}