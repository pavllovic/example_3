import * as lib from 'Lib/tabs/tabs.js';

const ProductInfo = lib.tabs;

ProductInfo.prototype = {
  constructor: ProductInfo,
  init: lib.init,
  setListeners: lib.setListeners,
  activateTab: lib.activateTab,
  deactivateTab: lib.deactivateTab,
  showPanel: lib.showPanel,
  hidePanel: lib.hidePanel,
  focusTab: lib.focusTab,
  handleEvent: lib.handleEvent,
  onkeydown: lib.onkeydown,
};

export default ProductInfo;
