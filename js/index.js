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

/* #region example  */
// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute ('src', siteContent["nav"]["img-src"]);
/* #endregion */

// My Work

/* #region  nav */
const navList = document.querySelectorAll('nav a');

for (i = 0; i < navList.length; i++){
  navList[i].textContent = siteContent['nav'][`nav-item-${i+1}`];
  navList[i].style.color = 'green';
}
/* #endregion */

/* #region  CTA */
const selectH1 = document.querySelector('.cta h1');
const selectButton = document.querySelector('.cta button');
const selectImg = document.querySelector('.cta img')

selectH1.textContent = siteContent['cta']['h1'];
selectButton.textContent = siteContent['cta']['button'];
selectImg.src = siteContent['cta']['img-src'];
/* #endregion */

/* #region  Top Content Head */
const topContentHead = document.querySelectorAll('.top-content h4');
const topContentText = document.querySelectorAll('.top-content p');

topContentHead[0].innerHTML = siteContent['main-content']['features-h4'];
topContentText[0].innerHTML = siteContent['main-content']['features-content'];
topContentHead[1].innerHTML = siteContent['main-content']['about-h4'];
topContentText[1].innerHTML = siteContent['main-content']['about-content'];

/* #endregion */

/* #region Middle img */
const topContentMiddleImg = document.querySelector('.middle-img');
topContentMiddleImg.src = siteContent['main-content']['middle-img-src'];
/* #endregion */

/* #region Top Content Bottom */
const bottomContentHeader = document.querySelectorAll('.bottom-content h4');
const bottomContentText = document.querySelectorAll(".bottom-content p");

bottomContentHeader[0].innerHTML = siteContent['main-content']['services-h4'];
bottomContentText[0].innerHTML = siteContent["main-content"]["services-content"];
bottomContentHeader[1].innerHTML = siteContent['main-content']['product-h4'];
bottomContentText[1].innerHTML = siteContent["main-content"]["product-content"];
bottomContentHeader[2].innerHTML = siteContent['main-content']['vision-h4'];
bottomContentText[2].innerHTML = siteContent["main-content"]["vision-content"];

/* #endregion */