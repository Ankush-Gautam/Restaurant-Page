import heroImage from './assets/hero-img.jpeg';

export const loadInitialContent = () => {
  const content = document.querySelector('#content');

  content.textContent = '';

  //hero section
  const heroSection = document.createElement('section');
  heroSection.id = 'hero-section';

  heroSection.style.backgroundImage = `url(${heroImage})`;
  heroSection.style.backgroundSize = 'cover';

  content.appendChild(heroSection);
};
