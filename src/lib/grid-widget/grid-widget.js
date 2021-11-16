export function gridWidget(elem) {
  this.grid = elem;
}

export function init() {
  this.setListeners();
  this.grid.querySelectorAll('[role="gridcell"]').forEach((item) => {
    this.removeFocusingInside(item);
  });
  this.setFocusingInside(this.grid.querySelector('[role="gridcell"]'));
}

export function setListeners() {
  this.grid.addEventListener('keydown', this);
  this.grid.addEventListener('focusin', this);
}

export function focusWidget(cell) {
  const link = cell.querySelector('[data-grid="widget"]');
  link.focus();
}

export function unfocusCell(cell) {
  cell.classList.remove('is-focus');
}

export function focusCell(cell) {
  if(this.focusedCell) {
    this.unfocusCell(this.focusedCell);
    this.removeFocusingInside(this.focusedCell);
  }
  cell.classList.add('is-focus');
  this.focusedCell = cell;
}

export function setFocusingInside(cell) {
  const arr = cell.querySelectorAll('[tabindex]');
  arr.forEach((item) => {
    item.setAttribute('tabindex', '0');
  });
}

export function removeFocusingInside(cell) {
  const arr = cell.querySelectorAll('[tabindex]');
  arr.forEach((item) => {
    item.setAttribute('tabindex', '-1');
  });
}

export function onkeydown(e) {
  const cell = e.target.closest('[role="gridcell"]');
  switch(e.key) {
    case 'ArrowDown':
    case 'ArrowRight':
      e.preventDefault();
      if(cell.nextElementSibling) {
        return this.focusWidget(cell.nextElementSibling);
      }
      break;
    case 'ArrowUp':
    case 'ArrowLeft':
      e.preventDefault();
      if(cell.previousElementSibling) {
        return this.focusWidget(cell.previousElementSibling);
      }
      break;
    case 'Home':
      e.preventDefault();
      const firstCell = this.grid.querySelector('[role="gridcell"]');
      return this.focusWidget(firstCell);
    case 'End':
      e.preventDefault();
      const lastCell = this.grid.querySelector('[role="gridcell"]:last-child');
      return this.focusWidget(lastCell);
    default:
      break;
  }
  return undefined;
}

export function destroy() {
  this.grid.removeEventlistener('keydown', this);
  this.grid.removeEventlistener('focusin', this);
}

export function handleEvent(e) {
  switch(e.type) {
    case 'keydown':
      e.stopPropagation();
      if(e.target.getAttribute('data-grid') === 'widget') {
        return this.onkeydown(e);
      }
      break;
    case 'focusin':
      e.stopPropagation();
      if(e.target.getAttribute('data-grid') === 'widget') {
        const cell = e.target.closest('[role="gridcell"]');
        if(cell !== this.focusedCell) {
          this.setFocusingInside(cell);
          this.focusCell(cell);
        }
      }
      break;
    default:
      break;
  }
  return undefined;
}
