  $(document).ready(function(){
    $('.slider').slick({
        dots: true
    });
  });

const popUpWrapper = document.querySelector('.pop-up-wrapper');
const cross = document.querySelector('.cross');
const details = document.querySelectorAll('.details');
const scrollBtn = document.querySelector('.scroll-btn');
const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.header-nav');

details.forEach((detail) => {
  detail.addEventListener('click', ()=>{
    popUpWrapper.style.display = 'block'
  })
})
popUpWrapper.addEventListener('click', (e) => {
  if(e.target===popUpWrapper || e.target===cross) {
    popUpWrapper.style.display = 'none'
  }
})

window.addEventListener('scroll', () => {
  if(document.body.scrollTop >= 800 || document.documentElement.scrollTop >= 800) {
    scrollBtn.style.display = 'block'
  } else {
    scrollBtn.style.display = 'none'
  }
})

scrollBtn.addEventListener('click', () => {
  if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
})

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('menu-open')
})