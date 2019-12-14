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

const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

/**
 * @description Checks whether the element is in the viewport or not
 * @param {Element} el
 * @returns {boolean} Elements visibility status in the viewport
 */
function isElementInViewport(el) {

  let rect = el.getBoundingClientRect();

  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


/**
 * @description Makes the link active
 * @param {Element} el
 */
function active(el) {
  el.style.cssText =
  `background: #333;
  color: #fff;
  transition: ease 0.3s all;`;
}

/**
 * @description Makes the link normal
 * @param {Element} el
 */
function normal(el) {
  el.style.cssText =
  `display: block;
  padding: 1em;
  font-weight: bold;
  text-decoration: none;
  color: #000`;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/



// build the nav

/**
 * @description This will dynamically create a navigation menu based on the sections of the page.
 */
function navBuild() {

  const ulElement = document.getElementById('navbar__list');

  // Creates 'li' elements and appends it to the parent 'ul' element
  for (let i = 0; i < sections.length; i++) {
    const liElement = document.createElement('li');
    liElement.innerHTML = `<a href='#'>${sections[i].dataset.nav}</a>`;
    liElement.classList.add('menu__link');
    ulElement.appendChild(liElement);
  }

  // css rules for 'ul' element
  ulElement.style.cssText = `
    display:flex;
    flex=flow: row wrap;
    align-items: center;
    justify-content: center;`;

  // Setting background-color to nav element
  const navElement = document.querySelectorAll('.navbar__menu');
  navElement[0].setAttribute("style","background-color:rgba(0,13,60,1);");

  // Setting css rules and 'href' attribute for 'anchor' elements
  const anchorElementsAll = ulElement.querySelectorAll('a');
  for (let i = 0; i < anchorElementsAll.length; i++) {
    anchorElementsAll[i].style.cssText = `padding:1rem;
    text-decoration:none;
    color:white;
    `;
    anchorElementsAll[i].setAttribute("href", "#section" + (i+1));
  }


  // Add class 'active' to section when near top of viewport

  /**
   * @description make the section active when it is active in the viewport/closest to the top which makes distinguished from the other sections.
   */
  function activeSection() {

    // Adds the class 'your-class-active' when the class is active
    // and makes the link active
    const handler = () => {
      for (let i=0; i < sections.length; i++) {
        if(isElementInViewport(sections[i])) {
          sections[i].classList.add('your-active-class');
          active(document.querySelectorAll('li')[i]);
        } else {
          sections[i].classList.remove('your-active-class');
          normal(document.querySelectorAll('li')[i]);
        }
      }
    };

    handler();  // function call
    window.addEventListener('scroll', handler);
  }
  activeSection(); // function call

  // Scroll to top button
  window.onscroll = () => {

    // when scrolling if the root element's distance from
    // top is greater than 350 pixels than top button will appear
    if (document.documentElement.scrollTop > 350) {
      document.getElementById('top-btn').style.display = "block";
    } else {
      document.getElementById('top-btn').style.display = "none";
    }
    // when scrolling the navbar will be visible
    document.querySelector('header').style.display = "block";
  }
} // end of the navBuild()


// Scroll to anchor ID using scrollTO event
/**
 * @description Clicking on a navigation item will scroll to the appropriate section of the page smoothly.
 * @param {Event} e
 *
 */
function scrollOnClick(e) {  //event delegation
  e.preventDefault();
  if (e.target.nodeName === "A") {
    const hrefValue = e.target.getAttribute("href");
    document.querySelector(hrefValue).scrollIntoView ({
      behavior: 'smooth',
      block: 'center'
    })
  }
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
document.addEventListener('DOMContentLoaded', navBuild);

// Scroll to section on link click
document.querySelector('ul').addEventListener("click", scrollOnClick); //event delegation

// Scroll to top on button click
document.getElementById('top-btn').addEventListener('click', () => {
  document.querySelector('html').scrollIntoView({behavior:"smooth"});
});



// Hide fixed navigation bar while not scrolling

let flag = false;

setInterval( () => {
  document.querySelector('header').addEventListener('mouseover', () => {
    flag = true;
  });
  document.querySelector('header').addEventListener('mouseout', () => {
    flag = false;
  });
  // when root element is at the top than navbar will be visible forever
  if((document.documentElement.scrollTop === 0)) {
    document.querySelector('header').style.display = "block";
  } else if(flag) { //if mouse is over the navbar then it is visible forever
    document.querySelector('header').style.display = "block";
  } else {
    document.querySelector('header').style.display = "none";
  }
},6000);





