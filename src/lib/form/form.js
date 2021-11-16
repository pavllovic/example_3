export function form(elem) {
  this.form = elem;
  this.sending = false;
}

export function init() {
  this.setListeners();
}

export function setListeners() {
  this.form.addEventListener('submit', this);
}

export function destroy() {
  this.form.removeEventListener('submit', this);
}

export function getFormData() {
  const formData = new FormData(this.form);
  return formData;
}

export function submitForm() {
  this.sending = true;
  if(this.showSubmitting) this.showSubmitting();
  const data = this.getFormData(this.form);
  this.sendFormHandler(this.form, data);
}

export function resetForm() {
  this.form.reset();
}

export function showSubmitting() {
  const btn = this.form.querySelector('[type="submit"]');
  if(this.sending) {
    btn.classList.add('submitting');
    btn.setAttribute('disabled', 'true');
  } else {
    btn.classList.remove('submitting');
    btn.removeAttribute('disabled');
  }
}

export function handleEvent(e) {
  switch(e.type) {
    case 'submit':
      e.preventDefault();
      return this.submitForm();
    default:
      break;
  }
  return undefined;
}
