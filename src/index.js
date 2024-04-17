import './style.css';

function createHome(){
  const homeContent = document.createElement('div');
  homeContent.classList.add('home-content');

  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to Delicious Delights'
  homeContent.appendChild(headline)

  const description = document.createElement('p');
  description.textContent = 'Experience a world of exquisite flavors at Delicious Delights. Our passionate chefs craft each dish using the finest, locally-sourced ingredients to create memorable dining experiences. Whether you\'re in the mood for a classic comfort food or a gourmet masterpiece, we have something to satisfy every palate. Join us for lunch, dinner, or a special occasion, and let us treat you to a culinary journey like no other.';
  homeContent.appendChild(description);

  const orderButton = document.createElement('button');
  orderButton.textContent = 'Order Now';
  homeContent.appendChild(orderButton);

  return homeContent;
}

function createMenuItem(name, description, price, imageSrc){
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const image = document.createElement('img');
  image.src = require(`./images/${imageSrc}`);
  image.alt = name;
  menuItem.appendChild(image);

  const itemName = document.createElement('h3');
  itemName.textContent = name;
  menuItem.appendChild(itemName);

  const itemDescription = document.createElement('p');
  itemDescription.textContent = description;
  menuItem.appendChild(itemDescription);

  const itemPrice = document.createElement('span');
  itemPrice.classList.add('price');
  itemPrice.textContent = price;
  menuItem.appendChild(itemPrice);

  return menuItem;
}


function createMenu(){
  const menuContent = document.createElement('div');
  menuContent.classList.add('menu-content');

  const headline = document.createElement('h1');
  headline.textContent = 'Our Menu';
  headline.classList.add('menu-headline');
  menuContent.appendChild(headline);

  const menuItemsContainer = document.createElement('div');
  menuItemsContainer.classList.add('menu-items-container');

  const menuItems = [
    {
      name: 'Akami',
      description: 'Lean tuna, known for its deep red color and firm texture.',
      price: '$12.99',
      imageSrc: 'akami.jpg',
    },
    {
      name: 'Salmon',
      description: 'Fresh, buttery salmon sushi.',
      price: '$10.99',
      imageSrc: 'salmon.jpg',
    },
    {
      name: 'Sushi Roll',
      description: 'Assorted sushi rolls with various fillings and toppings.',
      price: '$14.99',
      imageSrc: 'sushi-roll.jpg',
    },
    {
      name: 'Unagi',
      description: 'Thinly sliced raw fish, served without rice.',
      price: '$15.99',
      imageSrc: 'unagi.jpg',
    },
    {
      name: 'Otoro',
      description: 'Fatty tuna belly, prized for its rich flavor and melt-in-your-mouth texture.',
      price: '$18.99',
      imageSrc: 'otoro.jpg',
    },
  ];

  menuItems.forEach((item) => {
    const menuItem = createMenuItem(item.name, item.description, item.price, item.imageSrc);
    menuItemsContainer.appendChild(menuItem);
  });

  menuContent.appendChild(menuItemsContainer);
  
  return menuContent;
}


function createAbout(){
  const aboutContent = document.createElement('div');
  aboutContent.classList.add('about-content')

  const headLine = document.createElement('h1');
  headLine.textContent = 'About Us';
  aboutContent.appendChild(headLine);

  const description = document.createElement('p');
  description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed erat nec augue maximus malesuada. Fusce euismod, nisi sit amet bibendum malesuada, sapien nibh faucibus nisi, at rhoncus odio dolor at neque. Proin id nunc vel metus bibendum luctus.';
  aboutContent.appendChild(description);

  const openingHoursHeadline = document.createElement('h2');
  openingHoursHeadline.textContent = 'Opening Hours';
  aboutContent.appendChild(openingHoursHeadline);

  const openingHoursTable = document.createElement('table');
  const openingHours = [
    { day: 'Sunday', hours: '8am - 9pm' },
    { day: 'Monday', hours: 'Close' },
    { day: 'Tuesday', hours: '8am - 9pm' },
    { day: 'Wednesday', hours: '8am - 9pm' },
    { day: 'Thursday', hours: '8am - 9pm' },
    { day: 'Friday', hours: '8am - 9pm' },
    { day: 'Saturday', hours: '8am - 9pm' },
  ];
  openingHours.forEach(({ day, hours }) => {
    const row = document.createElement('tr');
    const dayCell = document.createElement('td');
    const hoursCell = document.createElement('td');
    dayCell.textContent = day;
    hoursCell.textContent = hours;
    row.appendChild(dayCell);
    row.appendChild(hoursCell);
    openingHoursTable.appendChild(row);
  });
  aboutContent.appendChild(openingHoursTable);

  const locationHeadline = document.createElement('h2');
  locationHeadline.textContent = 'Location';
  aboutContent.appendChild(locationHeadline);

  const locationInfo = document.createElement('p');
  locationInfo.innerHTML = 'Uttrakhand, Dehradun 31 Street, chilliz<br>Phone: 7894561235468154<br>Email: totallyFake@gmail.com';
  aboutContent.appendChild(locationInfo);

  const mapContainer = document.createElement('div');
  mapContainer.classList.add('map-container');
  aboutContent.appendChild(mapContainer);

  return aboutContent;
}

function loadGoogleMap() {
  const mapContainer = document.querySelector('.map-container');
  if (mapContainer) {
    const map = new google.maps.Map(mapContainer, {
      center: { lat: 37.7749, lng: -122.4194 }, // Replace with your restaurant's coordinates
      zoom: 12, // Adjust the zoom level as needed
    });
    const marker = new google.maps.Marker({
      position: { lat: 37.7749, lng: -122.4194 }, // Replace with your restaurant's coordinates
      map: map,
      title: 'Delicious Delights',
    });
  }
}

function initializeWebsite() {
  const content = document.getElementById('content');
  const header = document.querySelector('header');
  const body = document.querySelector('body');
  // Preselect the "Home" tab on page load
  content.appendChild(createHome());
  header.classList.add('home-header');
  body.classList.add('home-header');

  const homeButton = document.getElementById('home');
  const menuButton = document.getElementById('menu');
  const aboutButton = document.getElementById('about');

  homeButton.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(createHome());
    header.classList.remove('menu-header', 'about-header');
    header.classList.add('home-header');
    body.classList.remove('menu-header', 'about-header');
    body.classList.add('home-header');
  });

  menuButton.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(createMenu());
    header.classList.remove('home-header', 'about-header');
    header.classList.add('menu-header');
    body.classList.remove('home-header', 'about-header');
    body.classList.add('menu-header');
  });

  aboutButton.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(createAbout());
    header.classList.remove('home-header', 'menu-header');
    header.classList.add('about-header');
    body.classList.remove('home-header', 'menu-header');
    body.classList.add('about-header');
    loadGoogleMap();
  });
}
console.log('yo')
document.addEventListener('DOMContentLoaded', initializeWebsite);


