// handler for success submit form
export function onSuccessHandler(res) {
  this.resetForm();
  console.log(res); //eslint-disable-line
}

// handler for error submit form
export function onErrorHandler(err) {
  console.log(err); //eslint-disable-line
}

// real request to server
export function sendFormHandler(form, data) {
  this.sendForm(form, data)
    .then((res) => this.onSuccessHandler(res))
    .catch((err) => this.onErrorHandler(err))
    .finally(() => {
      this.sending = false;
      // hide submitting
      if(this.showSubmitting)this.showSubmitting();
    });
}

// fake request to server
export function fakeSendFormHandler(form, data) {
  this.timeout = setTimeout(() => {
    this.sendForm(form, data)
      .then((res) => this.onSuccessHandler(res))
      .catch((err) => this.onErrorHandler(err))
      .finally(() => {
        this.sending = false;
        // hide submitting
        if(this.showSubmitting)this.showSubmitting();
      });
  }, 2000);
}
