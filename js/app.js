/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document. documentElement.clientWidth)
  );
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/



// build the nav
const ulElement = document.getElementById('navbar__list');

const navLinkNames = ["Section 1", "Section 2", "Section 3", "Section 4"];

for (let i = 0; i <=3; i++) {
  const liElement = document.createElement('li');
  liElement.innerHTML = `<a href='#'>${navLinkNames[i]}</a>`;
  liElement.classList.add('nav-link');
  ulElement.appendChild(liElement);
}

ulElement.style.cssText = `
  display:flex;
  flex=flow: row wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem 0`;

const navElement = document.querySelectorAll('.navbar__menu');

navElement[0].setAttribute("style","background-color:rgba(0,13,60,1);");

const anchorElementsAll = ulElement.querySelectorAll('a');

for (let i = 0; i < anchorElementsAll.length; i++) {
  anchorElementsAll[i].style.cssText = `padding:1rem;
  text-decoration:none;
  color:white;
  `;
  anchorElementsAll[i].setAttribute("onmouseover","hover(this)");
  anchorElementsAll[i].setAttribute("onmouseout","normal(this)");
}

function hover(el) {
  el.style.cssText =
  `padding:1rem;
  text-decoration:none;
  color:black;
  background-color: #fff`;
}

function normal(el) {
  el.style.cssText =
  `padding:1rem;
  text-decoration:none;
  color:white;
  `;
}




// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


