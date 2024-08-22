import heroImage from './assets/hero-img.jpg';

export const home = () => {
  const content = document.querySelector('#content');

  content.textContent = '';

  //homepage title
  const headline = document.createElement('h2');
  headline.textContent = '"Savor the Flavor, Experience the Difference."';

  content.appendChild(headline);

  //hero section
  const heroSection = document.createElement('section');
  heroSection.id = 'hero-section';

  heroSection.style.backgroundImage = `url(${heroImage})`;
  heroSection.style.backgroundSize = 'cover';

  content.appendChild(heroSection);

  //restaurant hours

  const tableTitle = document.createElement('h2');
  tableTitle.classList.add('sub-header');
  tableTitle.textContent = 'We are Open on';
  content.appendChild(tableTitle);

  const hoursData = [
    { day: 'Monday', hours: '9:00 AM - 9:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 9:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 9:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 9:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 11:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 11:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 8:00 PM' },
  ];

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Create table header
  const headerRow = document.createElement('tr');
  const dayHeader = document.createElement('th');
  dayHeader.textContent = 'Day';
  const hoursHeader = document.createElement('th');
  hoursHeader.textContent = 'Opening Hours';
  headerRow.appendChild(dayHeader);
  headerRow.appendChild(hoursHeader);
  thead.appendChild(headerRow);

  // Create table rows for each day
  hoursData.forEach((item) => {
    const row = document.createElement('tr');
    const dayCell = document.createElement('td');
    dayCell.textContent = item.day;
    const hoursCell = document.createElement('td');
    hoursCell.textContent = item.hours;
    row.appendChild(dayCell);
    row.appendChild(hoursCell);
    tbody.appendChild(row);
  });

  // Append thead and tbody to the table
  table.appendChild(thead);
  table.appendChild(tbody);

  // Append the table to the container
  content.appendChild(table);
};
