import * as lib from 'Lib/combobox/combobox.js';

const ComboboxColor = lib.combobox;

ComboboxColor.prototype = {
  constructor: ComboboxColor,
  init: lib.init,
  toogleOptions: lib.toogleOptions,
  openOptions: lib.openOptions,
  closeOptions: lib.closeOptions,
  resetCombobox: lib.resetCombobox,
  onOptionChecked: function(e) {
    lib.onOptionChecked.call(this, e);
    const option = this.arrayOptions[this.optionSelectedIndex];
    const color = option.style.getPropertyValue('--bg-color');
    this.combobox.style.setProperty('--bg-color', color);
  },
  onKeydown: lib.onKeydown,
  onComboboxBlur: lib.onComboboxBlur,
  onListboxMouseDown: lib.onListboxMouseDown,
  onOptionFocused: lib.onOptionFocused,
  destroy: lib.destroy,
  handleEvent: lib.handleEvent,
};

export default ComboboxColor;
