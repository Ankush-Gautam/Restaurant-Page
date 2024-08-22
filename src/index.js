import './styles.css';
import { home } from './home';
import { menu } from './menu';
import { about } from './about';

// Load the home page by default
home();

const navButtons = document.querySelectorAll('.nav-btns');
navButtons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const selectedPage = event.target.id;

    if (selectedPage == 'menu') {
      menu();
    } else if (selectedPage == 'about') {
      about();
    } else {
      home();
    }
  });
});

const toggleDarkMode = () => {
  const toggleBtn = document.querySelector('#mode-toggle');
  const bodyElement = document.body;

  toggleBtn.addEventListener('click', (event) => {
    bodyElement.classList.toggle('dark-mode');
    bodyElement.classList.toggle('light-mode');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  toggleDarkMode();
});
