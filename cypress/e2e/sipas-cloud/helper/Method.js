import { Locator } from "./Locator";

const locator = new Locator();

export class Method{
    clickBtnAgKeluar(){
        cy.get(locator.btnAgKeluar).should("be.visible").click();
    }

    clickBtnBuatBaru(){
        cy.get(locator.btnBuatBaru).should("be.visible").click();
    }

    clickInputSuratTujuan(){
        cy.get(locator.inputSuratTujuan).should("be.visible").click();
    }

    typeInputSuratTujuan(text){
        cy.get(locator.inputSuratTujuan).should("be.visible").type(text, { delay: 200 });
    }

    clickInputSuratPerihal(){
        cy.get(locator.inputSuratPerihal).should("be.visible").click();
    }

    typeInputSuratPerihal(text){
        cy.get(locator.inputSuratPerihal).should("be.visible").type(text, {delay: 50});
    }

    clickBtnPenyetuju(){
        cy.get(locator.btnPenyetuju).should("be.visible").click();
    }

    selectPenyetuju(id){
        cy.get(locator.checkBoxPenyetuju(id)).click({force: true});
    }

    clickBtnTambahPenyetuju(){
        cy.get(locator.btnTambahPenyetuju).should("be.visible").click();
    }

    clickBtnCloseModal(){
        cy.get(locator.btnCloseModal).should("be.visible").click({force: true});
    }

    clickBtnConfirmModal(){
        cy.get(locator.btnConfirmModal).should("be.visible").click();
    }

    clickBtnAjukanSurat(){
        cy.get(locator.btnAjukanSurat).should("be.visible").click();
    }
}