import MenuLinks from 'Components/menu-action/menu-links.js';
import Nav from 'Components/nav/nav.js';
import style from './css/common.css'; // eslint-disable-line

const nav = new Nav('menu');
nav.init();

const elemMenuLinks = document.getElementById('more-category');
if(elemMenuLinks) {
  const menuLinks = new MenuLinks(elemMenuLinks);
  menuLinks.init();
}

// if (module.hot) {
//   module.hot.accept();
// }
