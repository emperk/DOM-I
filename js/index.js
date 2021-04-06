const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// HEADER BEGINS //

const links = document.querySelectorAll('nav > a'); // selecting content
// console.log(links);

// adding to page //

links[0].textContent = siteContent.nav['nav-item-1'];
links[1].textContent = siteContent.nav['nav-item-2'];
links[2].textContent = siteContent.nav['nav-item-3'];
links[3].textContent = siteContent.nav['nav-item-4'];
links[4].textContent = siteContent.nav['nav-item-5'];
links[5].textContent = siteContent.nav['nav-item-6'];

links.forEach(item => item.style.color = 'green');
// console.log(links);

// HEADER ENDS //

// SELECTING SECTION "CTA" BEGINS //

const ctaTitle = document.querySelector('h1'); // selecting content

ctaTitle.textContent = siteContent.cta['h1']; // adding to page



// with uncle mark











// SELECTING SECTION "CTA" ENDS //

// SELECTING SECTION "MAIN CONTENT" BEGINS //

// const allMainContent = document.querySelectorAll('main-content');
// console.log(allMainContent); // selecting all main content

// const featuresTextContent = document.querySelector('.text-content:nth-of-type(1)'); // selecting everything within the features text content class 
// console.log(featuresTextContent);

// const allFeaturesTextContent = document.querySelector('.text-content');
// console.log(allFeaturesTextContent); // selecting everything within the features text content class


const mainContent = document.querySelector('.main-content');
const mainContentText = mainContent.querySelectorAll('.text-content')
mainContentText.forEach((item, i) => {
  const allContent = [
    siteContent['main-content']['features-content'],
    siteContent['main-content']['about-content'],
    siteContent['main-content']['services-content'],
    siteContent['main-content']['product-content'],
    siteContent['main-content']['vision-content'],
  ]
  item.textContent = allContent[i];
})
console.log(mainContent);








// const mainContent = document.querySelector('.main-content');
// console.log(mainContent)

// // with uncle mark

// const topContent = document.querySelector('.top-content');
// let topContentPara = topContent.querySelector('.text-content');
// topContentPara.textContent = siteContent['main-content']['features-content']









// SELECTING TOP CONTENT BEGINS //

// const topContent = document.querySelector('.top-content');
// console.log(topContent);

// const featuresTextContent = document.querySelector('h4');
// const featuresParagraphTextContent = topContent.querySelectorAll('p');
// const aboutTextContent = topContent.querySelectorAll('h4');
// const aboutParagraphTextContent = topContent.querySelectorAll('p');

// SELECTING TOP CONTENT ENDS //

// SELECTING MIDDLE IMG BEGINS //

const middleImg = document.querySelector('#middle-img');

// SELECTING MIDDLE IMG ENDS //

// SELECTING BOTTOM CONTENT BEGINS //

// const bottomContent = document.querySelector('.bottom-content');
// // console.log(bottomContent);

// const servicesTextContent = bottomContent.querySelectorAll('h4');
// const servicesParagraphTextContent = bottomContent.querySelectorAll('p');
// const productTextContent = bottomContent.querySelectorAll('h4');
// const productParagraphTextContent = bottomContent.querySelectorAll('p');
// const visionTextContent = bottomContent.querySelectorAll('h4');
// const visionParagraphTextContent = bottomContent.querySelectorAll('p');

// SELECTING BOTTOM CONTENT ENDS //

// SELECTING CONTACT BEGINS //

const contactSection = document.querySelector('.contact');
// console.log(contactSection);

const titleContactContent = contactSection.querySelectorAll('h4');
const addressContent = contactSection.querySelectorAll('p');
const phoneContent = contactSection.querySelectorAll('p');
const emailContent = contactSection.querySelectorAll('p');

// SELECTING CONTACT ENDS //

// SELECTING SECTION MAIN CONTENT ENDS //

// SELECTING FOOTER BEGINS //

const footerContent = document.querySelectorAll(footer);

// SELECTING FOOTER ENDS //

// ADDING //

// ADDING MAIN CONTENT BEGINS //

// ADDING TOP CONTENT BEGINS //

// featuresTextContent.textContent = siteContent.main-content['features-h4'];





featuresTextContent.textContent = siteContent["main-content"]["h1"]; // adding to page


// featuresTextContent.textContent = 'Features';



















// // 👉 1- Finding an element on the page and saving a reference to it
// //  Older: getElementById, getElementsByTagName, getElementsByClassName
// //  Newer: querySelector, querySelectorAll
// //  Select the following single elements from the div.card

// // A- finding across the entire DOM
// const header = document.querySelector("header")
// // const logoTitle = document.getElementById('logoTitle');
// const firstCard = document.querySelector('.card');
// // B- finding within one particular element
// const imageFirstCard = firstCard.querySelector('img')
// const titleFirstCard = firstCard.querySelector('h2')
// const subtitleFirstCard = firstCard.querySelector('h3')
// const textFirstCard = firstCard.querySelector('p')
// // C- traversing with dot notation
// const link1FirstCard = textFirstCard.nextElementSibling;
// const link2FirstCard = link1FirstCard.nextElementSibling;


// // 👉 2- Finding collections of elements in the DOM
// // A- Find all the anchor tags inside the nav element
// const links = document.querySelectorAll('nav a')

// // B- Loop over the links and console.log their text content
// // links.forEach(link => {
// //     console.log(link.textContent);
// // })
// // C- Turn the collection of links into a real array
// const linksArray = Array.from(links);
// // console.log(linksArray)
// // D- Use .filter to find the anchor tag with the textContent of "Home"
// // console.log(linksArray.filter(link => link.textContent === 'Home'));


// // 👉 3- Changing an element's text content
// //  A- Change the cat-related content into dog-related content
// link2FirstCard.textContent = 'Dog Ipsum'
// titleFirstCard.textContent = 'Dog'
// subtitleFirstCard.textContent = 'Doggo is best'
// textFirstCard.textContent = 'Dog :P'
// //  B- Have the students research online the difference between textContent and innerText


// // 👉 4- Changing any property
// //  A- Using dot notation to change a few attributes
// // console.log(imageFirstCard);
//     logoTitle.className = 'logo heading green'
//     console.log(logoTitle);
//     imageFirstCard.src = 'https://images.unsplash.com/photo-1610353118401-8221b58aba9c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80'

// //  B- Using .setAttribute to change a few attributes
// link1FirstCard.setAttribute('href', 'https://unsplash.com/images/animals/dog')

// // 👉 5- Changing the styling of an element
// //  A- By changing the class names on the element with the classList API
// header.classList.add('sky');
// header.classList.remove('sky');
// setInterval(() => header.classList.toggle('sky'), 1000)

// //  B- By manipulating inline styles on the element
// // header.style.fontSize = '2em';

// // 👉 6- Creating new elements from scratch and appending them
// // Create a new link inside the nav for "Blog"
//     const blogLink = document.createElement('a')
//     blogLink.textContent = 'Blog'
//     blogLink.href = '#'
//     blogLink.classList.add('menu-item');
//     document.querySelector('nav').appendChild(blogLink)
//     console.log(blogLink);

// // 👉 7- Making a copy of the card and appending it to the card group
// // DOM nodes can only exist in one spot in the DOM
// // We cannot append the same copy multiple times

// const secondCard = firstCard.cloneNode(true);
// document.querySelector('.card-group').appendChild(secondCard)

// // 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// // 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
