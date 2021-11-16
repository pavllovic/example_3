import Carousel from 'Components/carousel/carousel.js';
import GridCard from 'Components/grid-card/grid-card.js';
import BtnLike from 'Components/btn-like/btnLike.js';

const carousel = new Carousel(document.querySelector('.carousel'));
const grid = document.querySelector('#grid-card');
const gridCard = new GridCard(grid);
const btnLike = new BtnLike(grid);

carousel.init();
gridCard.init();
btnLike.init();
