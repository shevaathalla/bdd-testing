
import { Helper } from "../../../common/Helper";
import { Method } from "../helper/Method";

const method = new Method();
const helper = new Helper();

let suratPerihal;
describe("Deliver Mail", () => {
  before(() => {
    suratPerihal = `Surat Pemberitahuan - ` + helper.generateRandom(5);
  });
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });
  it("Able to create surat", () => {
    cy.loginWithTokenCloud(1);
    cy.visit(`https://cloud-${Cypress.env("CLOUD_APP_ENV")}.sipas.id/home`);
    cy.reload();

    cy.visit(
      `https://cloud-${Cypress.env("CLOUD_APP_ENV")}.sipas.id/home/#/suratunit`
    ).reload();
    cy.intercept(
      "GET",
      `https://api-${Cypress.env("CLOUD_APP_ENV")}.sipas.id/v1/identity/identity`
    ).as("identity");
    cy.wait("@identity", {
      timeout: 15000,
    }).then((interception) => {
      cy.log(interception.response.body);
    });
    cy.wait(4000);

    method.clickBtnAgKeluar();

    cy.wait(1000);

    method.clickBtnBuatBaru();

    cy.wait(2000);

    cy.getCookie("access_token")
      .should("exist")
      .then((accessToken) => {
        let accessTokenValue = accessToken.value;
        cy.request({
          method: "GET",
          url: `https://api-${Cypress.env(
            "CLOUD_APP_ENV"
          )}.sipas.id/v1/org/staf?page=1&limit=17`,
          headers: {
            Authorization: `Bearer ${accessTokenValue}`,
          },
        }).then((response) => {
          cy.log(response.body.data);
          expect(response.status).to.equal(200);
          expect(response.body.error).to.be.false;

          let data = response.body.data;

          data.filter((item) => {
            if (item.staf_nama === "Sheva Magang") {
              method.clickInputSuratTujuan();
              method.typeInputSuratTujuan(item.staf_nama);

              method.clickInputSuratPerihal();

              method.typeInputSuratPerihal(`${suratPerihal}`);

              method.clickBtnPenyetuju();

              method.selectPenyetuju(item.staf_id);

              method.clickBtnTambahPenyetuju();

              method.clickBtnCloseModal();

              method.clickBtnConfirmModal();

              cy.wait(1000); // need to wait bcs network request

              method.clickBtnConfirmModal();

              method.clickBtnAjukanSurat();

              cy.wait(500); // render popup

              method.clickBtnConfirmModal();
            }
          });
        });
      });
  });

  it("Able to receive surat", () => {
    cy.log(suratPerihal);

    cy.loginWithTokenCloud(2);
    cy.visit(`https://cloud-${Cypress.env("CLOUD_APP_ENV")}.sipas.id/home/#/suratku/tugas`);
    cy.reload();

    cy.intercept(
      "GET",
      `https://api-${Cypress.env("CLOUD_APP_ENV")}.sipas.id/v1/identity/identity`
    ).as("identity");
    cy.wait("@identity", {
      timeout: 15000,
    }).then((interception) => {
      cy.log(interception.response.body);
    });
    cy.wait(4000);

    cy.contains(suratPerihal).should("be.visible");
  });
});
