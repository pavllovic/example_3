import FormMessage from 'Components/form/form-message/form-message.js';

const form = document.querySelector('[name="form-message"]');
const formMessage = new FormMessage(form);

formMessage.init();

// if (module.hot) {
//   module.hot.accept();
// }
