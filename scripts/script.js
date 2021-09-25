  $(document).ready(function(){
    $('.slider').slick({
        dots: true
    });
  });

const popUpWrapper = document.querySelector('.pop-up-wrapper');
const cross = document.querySelector('.cross');
const details = document.querySelector('.details');

details.addEventListener('click', ()=>{
  popUpWrapper.style.display = 'block'
})
popUpWrapper.addEventListener('click', (e) => {
  if(e.target===popUpWrapper || e.target===cross) {
    popUpWrapper.style.display = 'none'
  }
})

const scrollBtn = document.querySelector('.scroll-btn');

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