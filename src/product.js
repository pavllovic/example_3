import CarouselTab from 'Components/carousel-tab/carousel-tab.js';
import ProductInfo from 'Components/product-info/product-info.js';
import GridCard from 'Components/grid-card/grid-card.js';
import BtnLike from 'Components/btn-like/btnLike.js';
import FormProduct from 'Components/form/form-product/form-product.js';

const carouselTab = new CarouselTab(document.querySelector('.carousel-tab'));
const productInfo = new ProductInfo(document.querySelector('#product-info'));

const grid = document.querySelector('#grid-card');
const gridCard = new GridCard(grid);
const btnLike = new BtnLike(grid);

const form = document.querySelector('[name="form-product"]');
const formBtnLike = new BtnLike(form);
const formProduct = new FormProduct(form);

carouselTab.init();
productInfo.init();
gridCard.init();
btnLike.init();
formBtnLike.init();
formProduct.init();

if (module.hot) {
  module.hot.accept();
}
