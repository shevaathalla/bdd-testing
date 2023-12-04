export class Locator {
  btnAgKeluar = `[data-testid="surat-menu"] > [style="opacity: 1; order: 1;"] > .ant-menu-title-content`;
  btnBuatBaru = `[data-testid="button-create"] > span`;
  inputSuratTujuan = `[data-testid="input-surat-tujuan"]`;
  inputSuratPerihal = `[data-testid="input-surat-perihal"]`;
  btnPenyetuju = `[data-testid="button-new"] > span`;
  checkBoxPenyetuju = (id) => {
    return `[data-row-key="${id}"] > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner`;
  }

  btnTambahPenyetuju = `[data-testid="modal-pilih"] > span`;
  btnCloseModal = `.ant-modal-close-x`;
  btnConfirmModal = `.ant-modal-confirm-btns > .ant-btn-primary > span`;
  btnAjukanSurat = `[data-testid="ajukan-button"] > span`;
}
