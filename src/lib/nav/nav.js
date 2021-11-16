export function nav(id) {
  this.btn_open = document.querySelector('[data-nav="btn_open"]');
  this.btn_close = document.querySelector('[data-nav="btn_close"]');
  this.menu = document.querySelector(`#${id}`);
  // state nav
  this.open = false;
}

export function init() {
  this.btn_open.addEventListener('click', this);
  this.btn_close.addEventListener('click', this);
}

export function openMenu() {
  this.btn_open.setAttribute('aria-expanded', 'true');
  this.btn_close.setAttribute('aria-expanded', 'true');
  this.btn_close.focus();
}

export function closeMenu() {
  this.btn_open.setAttribute('aria-expanded', 'false');
  this.btn_close.setAttribute('aria-expanded', 'false');
  this.btn_open.focus();
}

export function toogleMenu() {
  this.open ? this.closeMenu() : this.openMenu();
  this.open = !this.open;
}

export function destroy() {
  this.btn_open.removeEventListener('click', this);
  this.btn_close.removeEventListener('click', this);
}

export function handleEvent(e) {
  switch(e.type) {
    case 'click':
      return this.toogleMenu();
    default:
      break;
  }
  return undefined;
}
