import * as lib from 'Lib/menu-action/menu-action.js';

const MenuLinks = lib.menuAction;

MenuLinks.prototype = {
  constructor: MenuLinks,
  init: lib.init,
  toogleMenu: lib.toogleMenu,
  openMenu: lib.openMenu,
  closeMenu: lib.closeMenu,
  selectAction: lib.selectAction,
  focusAction: lib.focusAction,
  blurMenu: lib.blurMenu,
  mousedownMenu: lib.mousedownMenu,
  destroy: lib.destroy,
  keydownMenu: lib.keydownMenu,
  handleEvent: lib.handleEvent,
};

export default MenuLinks;
