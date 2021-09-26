  $(document).ready(function(){
    $('.slider').slick({
        dots: true
    });
  });

var popUpWrapper = document.querySelector('.pop-up-wrapper');
var cross = document.querySelector('.cross');
var details = document.querySelectorAll('.details');
var scrollBtn = document.querySelector('.scroll-btn');
var burger = document.querySelector('.burger-menu');
var menu = document.querySelector('.header-nav');

for(var i=0; i<details.length; i++) {
  details[i].addEventListener('click', function () {
    popUpWrapper.style.display = 'block'
  })
}

popUpWrapper.addEventListener('click', function (e) {
  if(e.target===popUpWrapper || e.target===cross) {
    popUpWrapper.style.display = 'none'
  }
})

window.addEventListener('scroll', function () {
  if(document.body.scrollTop >= 800 || document.documentElement.scrollTop >= 800) {
    scrollBtn.style.display = 'block'
  } else {
    scrollBtn.style.display = 'none'
  }
})

burger.addEventListener('click', function ()  {
  burger.classList.toggle('active');
  menu.classList.toggle('menu-open')
})