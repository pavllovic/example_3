import * as lib from 'Lib/grid-widget/grid-widget.js';

const GridCard = lib.gridWidget;

GridCard.prototype = {
  constructor: GridCard,
  init: lib.init,
  setListeners: lib.setListeners,
  focusWidget: lib.focusWidget,
  focusCell: lib.focusCell,
  unfocusCell: lib.unfocusCell,
  setFocusingInside: lib.setFocusingInside,
  removeFocusingInside: lib.removeFocusingInside,
  onkeydown: lib.onkeydown,
  destroy: lib.destroy,
  handleEvent: lib.handleEvent,
};

export default GridCard;
