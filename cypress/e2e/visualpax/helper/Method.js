import { Locator } from "../helper/Locator";

const locator = new Locator();

export class Method {
  clickSearchBox() {
    cy.log("start clickin in search box...");
    cy.log(locator.fieldSearch);
    cy.get(locator.fieldSearch).should("be.visible").click();
  }

  typeSearchBox(text) {
    cy.log("start typing in search box...");
    cy.get(locator.fieldSearch).should("be.visible").type(text, { delay: 100 });
  }

  pressEnter() {
    cy.log("start pressing enter...");
    cy.get(locator.fieldSearch).should("be.visible").type("{enter}");
  }

  getTextProduct(text) {
    cy.log("start getting text product...");
    cy.get(locator.labelProduct).should("be.visible").contains(text);
  }
}
