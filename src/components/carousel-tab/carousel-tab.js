import * as lib from 'Lib/carousel-tab/carousel-tab.js';

const CarouselTab = lib.carouselTab;

CarouselTab.prototype = {
  constructor: CarouselTab,
  init: lib.init,
  setListeners: lib.setListeners,
  nextSlide: lib.nextSlide,
  prevSlide: lib.prevSlide,
  changeSlide: lib.changeSlide,
  activateSlide: lib.activateSlide,
  deactivateSlide: lib.deactivateSlide,
  disableControl: lib.disableControl,
  undisableControl: lib.undisableControl,
  focusTab: lib.focusTab,
  unfocusTab: lib.unfocusTab,
  activateTab: lib.activateTab,
  deactivateTab: lib.deactivateTab,
  onclickTab: lib.onclickTab,
  onkeydown: lib.onkeydown,
  handleEvent: lib.handleEvent,
};

export default CarouselTab;
