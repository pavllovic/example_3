const OrderList = function (elem) {
  this.list = elem;
  this.total = this.list.querySelector('[data-order-total]');
  this.count = this.list.querySelector('#order-count');
};

OrderList.prototype = {
  constructor: OrderList,

  init() {
    this.setListeners();
  },

  setListeners() {
    this.list.addEventListener('click', this);
  },

  removeOrder(id) {
    const order = this.list.querySelector(`#${id}`);
    if(order) {
      this.updateTotalPrice(order);
      this.updateCount();
      document.body.classList.add('order-list_remove');
      order.parentElement.classList.add('order-list--item_remove');
      setTimeout(() => {
        document.body.classList.remove('order-list_remove');
        order.parentElement.remove();
      }, 1000);
    }
  },

  getOrderPrice(order) {
    const price = order.getAttribute('data-order-price');
    return price * 1;
  },

  getTotalPrice() {
    const price = this.total.getAttribute('data-order-total');
    return price * 1;
  },

  setTotalPrice(price) {
    this.total.setAttribute('data-order-total', price);
    this.total.innerText = this.formattPrice(price);
  },

  updateTotalPrice(order) {
    const orderPrice = this.getOrderPrice(order);
    const totalPrice = this.getTotalPrice();
    this.setTotalPrice(totalPrice - orderPrice);
  },

  formattPrice(price) {
    const value = `${price}`.split('');
    let i = value.length;
    while(i > 3) {
      i -= 3;
      value[i] = ` ${value[i]}`;
    }
    return value.join('');
  },

  getCount() {
    return this.count.innerText;
  },

  setCount(count) {
    this.count.innerText = count;
  },

  updateCount() {
    const count = this.getCount();
    this.setCount(count - 1);
  },

  destroy() {
    this.list.removeEventListener('click', this);
  },

  handleEvent(e) {
    switch(e.type) {
      case 'click':
        const btn = e.target.closest('button[data-order]');
        if(btn) return this.removeOrder(btn.getAttribute('data-order'));
        break;
      default:
        break;
    }
    return undefined;
  },
};

export default OrderList;
