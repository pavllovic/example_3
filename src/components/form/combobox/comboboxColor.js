import * as lib from 'Lib/combobox/combobox.js';

const ComboboxColor = lib.combobox;

ComboboxColor.prototype = {
  constructor: ComboboxColor,
  init: lib.init,
  toogleOptions: lib.toogleOptions,
  openOptions: lib.openOptions,
  closeOptions: lib.closeOptions,
  setColor(index) {
    const option = this.arrayOptions[index];
    const color = option.style.getPropertyValue('--bg-color');
    this.combobox.style.setProperty('--bg-color', color);
  },
  resetCombobox() {
    lib.resetCombobox.call(this);
    this.setColor(0);
  },
  onOptionChecked: function(e) {
    lib.onOptionChecked.call(this, e);
    this.setColor(this.optionSelectedIndex);
  },
  onKeydown: lib.onKeydown,
  onComboboxBlur: lib.onComboboxBlur,
  onListboxMouseDown: lib.onListboxMouseDown,
  onOptionFocused: lib.onOptionFocused,
  destroy: lib.destroy,
  handleEvent: lib.handleEvent,
};

export default ComboboxColor;
