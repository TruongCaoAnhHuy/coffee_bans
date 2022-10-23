const headerMiddle = document.querySelector('.header__middle');

window.onscroll = function() {
  scrollFunction();
  scrollUpFunction();
};

//scroll-up
mybutton = document.querySelector('.scroll-top--btn')
function scrollUpFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//header-scroll
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    headerMiddle.classList.add('sticky');
  } else {
    headerMiddle.classList.remove('sticky');
  }
};

$(document).ready(function(){
  $('.slider').slick();
});

$(document).ready(function(){
  $('.content__review-container').slick();
});

$(document).ready(function(){
  $('.content__recent--product').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
        },
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
        }
      },
    ]
  });
});

var childHasSubNav = document.getElementById('menu__bar-nav--has-child');
var mobileMenu = document.getElementById('menu__bar-nav--plus');

mobileMenu.onclick = function() {
  var isClose= childHasSubNav.clientHeight === 44;
  if (isClose) {
    childHasSubNav.style.height = 'auto';
  } else {
    childHasSubNav.style.height = '44px'
  }
}

//text
const sliderTextTittle = document.querySelectorAll('.item__text--title');
const sliderTextBtn = document.querySelectorAll('.item__text--btn');
const sliderText = document.querySelectorAll('.slider__item--text');
const sliderItems = document.querySelectorAll('.slider__item');

//btn listens

function addAnimationText() {
  for(let i = 0; i < sliderItems.length; i++){
    sliderTextTittle[i].classList.add('active');
    sliderTextBtn[i].classList.add('active');
  }
}

window.addEventListener('load', addAnimationText());   


(function() {
    setInterval(() => {
      return document.querySelector(".content__review").classList.toggle("active");
    }, 1000);
  
}).call(this);