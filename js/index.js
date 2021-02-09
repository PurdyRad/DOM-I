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

// header

const multipleSections = document.querySelectorAll('a');
multipleSections[0].textContent = 'Services';
multipleSections[1].textContent = 'Product';
multipleSections[2].textContent = 'Vision';
multipleSections[3].textContent = 'Features';
multipleSections[4].textContent = 'About';
multipleSections[5].textContent = 'Contact';

const greenNav = document.querySelector('nav');
greenNav.style.backgroundColor = 'green';

const lastNav = document.createElement('nav');
lastNav.textContent = 'Past';
lastNav.href = '#';



document.querySelector('nav').appendChild(lastNav);

const extNav = document.createElement('nav');
extNav.textContent = 'Future';
extNav.href = '#';
document.querySelector('nav').prepend(extNav);


const img = document.querySelector('#logo-img');
img.src = 'img/logo.png';

const cta = document.querySelector('.cta-text h1');
cta.textContent = 'Dom Is Awesome';
const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent= 'Get Started';
const ctaImg = document.querySelector('#cta-img');
ctaImg.src ='img/header-img.png';

// main content

const topHeads = document.querySelectorAll('.top-content h4');
topHeads[0].textContent = 'Features';
topHeads[1].textContent = 'About';
const topPs = document.querySelectorAll('.top-content p');
topPs[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
topPs[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
// middle image

const midImg = document.querySelector('#middle-img');
midImg.src = 'img/mid-page-accent.jpg';

// bottom content
const botHeads = document.querySelectorAll('.bottom-content h4');
botHeads[0].textContent = 'Services';
botHeads[1].textContent = 'Product';
botHeads[2].textContent = 'Vision';
const botPs = document.querySelectorAll('.bottom-content p');
botPs[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
botPs[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
botPs[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';


// Contact

const contactHead = document.querySelector('.contact h4');
contactHead.textContent = 'Contact';
const contacts = document.querySelectorAll('.contact p');
contacts[0].textContent = '123 Way 456 Street <br> Somewhere, USA';
contacts[1].textContent = '1 (888) 888-8888';
contacts[2].textContent = 'sales@greatidea.io';

// Footer

const foot = document.querySelector('footer p');
foot.textContent = 'Copyright Great Idea! 2018';