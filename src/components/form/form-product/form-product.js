import * as lib from 'Lib/form/form.js';
import * as handlers from 'Lib/form/form-handlers.js';
import { sendFormJSON } from 'Lib/form/form-send.js';
import Combobox from 'Components/form/combobox/combobox.js';
import ComboboxColor from 'Components/form/combobox/comboboxColor.js';

const FormProduct = lib.form;

FormProduct.prototype = {
  constructor: FormProduct,
  init() {
    lib.init.call(this);
    this.arrCombobox = [];
    this.form.querySelectorAll('[role="combobox"]').forEach((item) => {
      const combobox = item.dataset.combobox === 'color'
        ? new ComboboxColor(item.parentElement)
        : new Combobox(item.parentElement);
      combobox.init();
      this.arrCombobox.push(combobox);
    });
  },
  setListeners: lib.setListeners,
  destroy: lib.destroy,
  getFormData: lib.getFormData,
  resetForm() {
    lib.resetForm.call(this);
    this.arrCombobox.forEach((combobox) => {
      combobox.resetCombobox();
    });
  },
  sendForm: sendFormJSON,
  submitForm: lib.submitForm,
  sendFormHandler: handlers.sendFormHandler,
  onSuccessHandler: handlers.onSuccessHandler,
  onErrorHandler: handlers.onErrorHandler,
  handleEvent: lib.handleEvent,
};

export default FormProduct;
