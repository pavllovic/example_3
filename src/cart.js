import GridOffer from 'Components/grid-offer/grid-offer.js';
import OrderList from 'Components/order-list/orderList.js';
import BtnLike from 'Components/btn-like/btnLike.js';

const orderList = new OrderList(document.querySelector('.order-list'));

const grid = document.querySelector('#grid-offer');
const gridOffer = new GridOffer(grid);
const btnLike = new BtnLike(grid);

gridOffer.init();
btnLike.init();
orderList.init();

if (module.hot) {
  module.hot.accept();
}
