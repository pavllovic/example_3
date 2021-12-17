import * as lib from 'Lib/form/form.js';
import { sendFormHandler } from 'Lib/form/form-handlers.js';
import { sendFormJSON } from 'Lib/form/form-send.js';

const FormPerson = lib.form;

FormPerson.prototype = {
  constructor: FormPerson,
  init: lib.init,
  setListeners: lib.setListeners,
  destroy: lib.destroy,
  getFormData: lib.getFormData,
  resetForm: lib.resetForm,
  sendForm: sendFormJSON,
  submitForm: lib.submitForm,
  sendFormHandler: sendFormHandler,
  updateFormValue() {
    const data = this.getFormData();
    data.forEach((value, name) => {
      this.form.elements[name].setAttribute('value', value);
    });
  },
  onSuccessHandler(res) {
    console.log(res);
    this.updateFormValue();
  },
  onErrorHandler(err) {
    console.log(err);
  },
  handleEvent: lib.handleEvent,
};

export default FormPerson;
