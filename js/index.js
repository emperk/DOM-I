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


// * [ ] Create selectors by using any of the DOM element's methods
// * [ ] Note that IDs have been used on all images. Use the IDs to update src path content

//    HEADER BEGINS // 

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const links = document.querySelectorAll('nav > a');

links[0].textContent = siteContent.nav['nav-item-1'];
links[1].textContent = siteContent.nav['nav-item-2'];
links[2].textContent = siteContent.nav['nav-item-3'];
links[3].textContent = siteContent.nav['nav-item-4'];
links[4].textContent = siteContent.nav['nav-item-5'];
links[5].textContent = siteContent.nav['nav-item-6'];

links.forEach(item => item.style.color = 'green');

//    HEADER ENDS //

//    CTA SECTION BEGINS //

// selecting // 

const ctaSection = document.querySelector('section');

const ctaTitle = ctaSection.querySelector('h1');
const ctaButton = ctaSection.querySelector('button');
const ctaImage = ctaSection.querySelector('img');

// adding to page //

ctaTitle.textContent = "Dom is Awesome";
ctaButton.textContent = "Get Started";
ctaImage.src = "img/header-img.png";

//    CTA SECTION ENDS //

//    MAIN-CONTENT SECTION BEGINS //

const mainContent = document.querySelector('.main-content');

const mainContentTitles = mainContent.querySelectorAll('h4');
mainContentTitles.forEach((item, i) => {
  const titleContents = [
    siteContent['main-content']["features-h4"],
    siteContent['main-content']['about-h4'],
    siteContent['main-content']['services-h4'],
    siteContent['main-content']['product-h4'],
    siteContent['main-content']['vision-h4'],
  ]
  item.textContent = titleContents[i];
})

const middleImage = document.querySelector('#middle-img');
middleImage.src = "img/mid-page-accent.jpg";

const mainContentText = mainContent.querySelectorAll('p');
mainContentText.forEach((item, i) => {
  const textContents = [
    siteContent['main-content']['features-content'],
    siteContent['main-content']['about-content'],
    siteContent['main-content']['services-content'],
    siteContent['main-content']['product-content'],
    siteContent['main-content']['vision-content'],
  ]
  item.textContent = textContents[i];
})

console.log(mainContent);

//    MAIN-CONTENT SECTION ENDS //

//    CONTACT SECTION BEGINS //

// "contact": {
//   "contact-h4" : "Contact",
//   "address" : "123 Way 456 Street Somewhere, USA",
//   "phone" : "1 (888) 888-8888",
//   "email" : "sales@greatidea.io",
// },
// "footer": {
//   "copyright" : "Copyright Great Idea! 2018"
// },

const contactSection = document.querySelector('.contact');

const contactTitle = contactSection.querySelector('h4');
contactTitle.textContent = siteContent['contact']['contact-h4'];

const contactDetails = contactSection.querySelectorAll('p')

const contactDetailContents = [
  siteContent['contact']['address'],
  siteContent['contact']['phone'],
  siteContent['contact']['email'],
]

contactDetails.forEach((detail, i) => {
  detail.textContent = contactDetailContents[i];
})


