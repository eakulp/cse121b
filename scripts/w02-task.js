/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = 'Eymi Kulp';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/eakulp.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('foodArray');
const yearElement = document.querySelector('#year');
let imageElement = document.querySelector('picture img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullname}<strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullname}`);

/* Step 5 - Array */
let foodArray = ['Lomo Saltado', 'Tri Tip', 'Sushi','Salads','Pizza','Pumpkin Pie'];
foodElement.innerHTML = foodArray;
let favFoods = 'Ice Cream';
foodArray.push(favFoods);
foodElement.innerHTML += `<br>${foodArray}`;
foodArray.shift();
foodElement.innerHTML += `<br>${foodArray}`;
foodArray.pop();
foodElement.innerHTML += `<br>${foodArray}`;








