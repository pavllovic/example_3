import GridCard from 'Components/grid-card/grid-card.js';
import MenuSort from 'Components/menu-action/menu-sort.js';
import BtnLike from 'Components/btn-like/btnLike.js';

const menuSort = new MenuSort(document.querySelector('#menu-sort'));
const grid = document.querySelector('#grid-card');
const gridCard = new GridCard(grid);
const btnLike = new BtnLike(grid);

gridCard.init();
menuSort.init();
btnLike.init();
