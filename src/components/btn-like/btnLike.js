const BtnLike = function(elem) {
  this.container = elem;
};

BtnLike.prototype = {
  constructor: BtnLike,

  init: function() {
    this.setListeners();
  },

  setListeners: function() {
    this.container.addEventListener('click', this);
  },

  toogleBtn: function(btn) {
    let state = btn.getAttribute('aria-pressed');
    (state === 'true') ? state = 'false' : state = 'true';
    btn.setAttribute('aria-pressed', state);
  },

  destroy: function() {
    this.container.removeEventListener('click', this);
  },

  handleEvent: function(e) {
    switch(e.type) {
      case 'click':
        const btn = e.target.closest('[data-btn="like"]');
        if(btn) return this.toogleBtn(btn);
        break;
      default:
        break;
    }
    return undefined;
  },
};

export default BtnLike;
