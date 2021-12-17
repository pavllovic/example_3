import FormPerson from 'Components/form/form-person/form-person.js';

const form = document.querySelector('[name="form-person"]');
const formPerson = new FormPerson(form);

formPerson.init();

if (module.hot) {
  module.hot.accept();
}
