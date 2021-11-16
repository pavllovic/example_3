export function tabs(elem) {
  this.wrap = elem;
  this.tablist = elem.querySelector('[role="tablist"]');
}

export function init() {
  this.setListeners();
  this.activateTab(this.tablist.querySelector('[role="tab"]'));
  this.showPanel(this.wrap.querySelector('[role="tabpanel"]'));
}

export function setListeners() {
  this.tablist.addEventListener('click', this);
  this.tablist.addEventListener('keydown', this);
}

export function deactivateTab(tab) {
  tab.setAttribute('tabindex', '-1');
  tab.setAttribute('aria-selected', false);
}

export function activateTab(tab) {
  if(this.activeTab) this.deactivateTab(this.activeTab);
  const id = tab.getAttribute('aria-controls');
  tab.setAttribute('tabindex', '0');
  tab.setAttribute('aria-selected', true);
  this.showPanel(this.wrap.querySelector(`#${id}`));
  this.activeTab = tab;
}

export function hidePanel(panel) {
  panel.setAttribute('tabindex', '-1');
}

export function showPanel(panel) {
  if(this.activePanel) this.hidePanel(this.activePanel);
  panel.setAttribute('tabindex', '0');
  this.activePanel = panel;
}

export function focusTab(tab) {
  tab.focus();
}

export function onkeydown(e) {
  switch(e.key) {
    case 'ArrowDown':
    case 'ArrowRight':
      e.preventDefault();
      if(e.target.nextElementSibling) {
        return this.focusTab(e.target.nextElementSibling);
      }
      break;
    case 'ArrowUp':
    case 'ArrowLeft':
      e.preventDefault();
      if(e.target.previousElementSibling) {
        return this.focusTab(e.target.previousElementSibling);
      }
      break;
    case 'Home':
      e.preventDefault();
      return this.focusTab(this.tablist.firstElementChild);
    case 'End':
      e.preventDefault();
      return this.focusTab(this.tablist.lastElementChild);
    case 'Space':
      e.preventDefault();
      return this.activateTab(e.currentTarget);
    default:
      break;
  }
  return undefined;
}

export function handleEvent(e) {
  switch(e.type) {
    case 'click':
      if(e.target.getAttribute('role') === 'tab') return this.activateTab(e.target);
      break;
    case 'keydown':
      e.stopPropagation();
      if(e.target.getAttribute('role') === 'tab') return this.onkeydown(e);
      break;
    default:
      break;
  }
  return undefined;
}
