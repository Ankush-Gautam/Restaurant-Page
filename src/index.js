import './styles.css';
import { loadInitialContent } from './home';
import { menu } from './menu';
import { about } from './about';

//home page by default
loadInitialContent();

const navButtons = document.querySelectorAll('#nav button');
navButtons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    console.log(event.target.id);
    if (event.target.id == 'menu') {
      menu();
    } else if (event.target.id == 'about') {
      about();
    } else {
      loadInitialContent();
    }
  });
});

const toggleDarkMode = () => {
  const toggleBtn = document.querySelector('#mode-toggle');
  const bodyElement = document.body;

  toggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
    bodyElement.classList.toggle('light-mode');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  toggleDarkMode();
});
