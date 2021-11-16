import MenuLinks from 'Components/menu-action/menu-links.js';
import Nav from 'Components/nav/nav.js';
import style from './css/common.css'; // eslint-disable-line

const nav = new Nav('menu');
const menuLinks = new MenuLinks(document.getElementById('more-category'));

nav.init();
menuLinks.init();

if (module.hot) {
  module.hot.accept();
}
