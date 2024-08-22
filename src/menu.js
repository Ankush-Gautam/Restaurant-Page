import Choila from './assets/choila.jpg';
import Dhido from './assets/dhido.jpg';
import GorkhaliLamb from './assets/gorkhaliLamb.jpg';
import JujuDhau from './assets/jujudhau.jpg';
import Laphing from './assets/laphing.jpg';
import Momo from './assets/momo.jpg';
import Selroti from './assets/selroti.jpg';
import Thaali from './assets/thaaliset.jpg';
import Thukpa from './assets/thukpa.jpg';
import Tongba from './assets/tongba.jpg';
import Yomari from './assets/yomari.jpg';

export function menu() {
  const menuItems = [
    { image: Choila, name: 'Choila' },
    { image: Dhido, name: 'Dhido' },
    { image: GorkhaliLamb, name: 'Gorkhali Lamb' },
    { image: JujuDhau, name: 'Juju Dhau' },
    { image: Laphing, name: 'Laphing' },
    { image: Momo, name: 'Momo' },
    { image: Selroti, name: 'Selroti' },
    { image: Thaali, name: 'Thaali Set' },
    { image: Thukpa, name: 'Thukpa' },
    { image: Tongba, name: 'Tongba' },
    { image: Yomari, name: 'Yomari' },
  ];

  const content = document.querySelector('#content');
  content.textContent = ''; //clear the old contents

  //title
  const title = document.createElement('h2');
  title.textContent = 'Menu List';
  content.appendChild(title);

  const menuContainer = document.createElement('div');
  menuContainer.style.display = 'flex';
  menuContainer.style.flexWrap = 'wrap';

  menuItems.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage = `url(${item.image})`;

    const text = document.createElement('span');
    text.textContent = item.name;
    card.appendChild(text);

    menuContainer.appendChild(card);
  });

  content.appendChild(menuContainer);
}
