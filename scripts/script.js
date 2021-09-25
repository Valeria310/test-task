  $(document).ready(function(){
    $('.slider').slick({
        dots: true
    });
  });



// const tabNav = document.querySelector('.tabs-nav');
// const tabs=document.querySelectorAll('.tab-item');
// const tabsBlocks=document.querySelectorAll('.tabs-block');

// tabNav.addEventListener('click', (e) => {
//   if(e.target.classList.contains('tab-item')){
//     if (!e.target.classList.contains('active')) {
//       tabs.forEach((tab) => {
//     tab.classList.remove('active')
//   })
//   tabsBlocks.forEach(element => {
//     element.style.display='none'
//   });
//   e.target.classList.add('active')
//   tabsBlocks[Array.from(tabs).indexOf(e.target)].style.display='block'
//     }
//   }
// })

// const scrollToTopButton = document.getElementById("scrollToTop");
// const burgerButton = document.querySelector(".page-header__burger");
// const menu = document.querySelector(".page-header-nav");
// const siteNav = document.querySelector(".site-navigation");
// const downloadButton = document.querySelector(".btn--download");
// const downloadIcon = downloadButton.querySelector(".download-arrow");

// const handleScroll = () => {
//   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//     scrollToTopButton.style.display = "block";
//   } 
//   else {
//     scrollToTopButton.style.display = "none";
//   }
// };

// const scrollToTop = () => {
//   const distanceFromTop = document.documentElement.scrollTop || document.body.scrollTop;

//   if (distanceFromTop > 0) {
//     window.scrollTo(0, 0);
//   }
// };

// function toggleMobileNav() {
//   burgerButton.classList.toggle("active");
//   menu.classList.toggle("active");
//   body.classList.toggle("lock");
// }

// function closeNav() {
//   body.classList.remove("lock");
//   burgerButton.classList.remove("active");
//   menu.classList.remove("active");
// }

// function animateDownloadButton() {
//   downloadIcon.classList.add("animate-download");

//   setTimeout(function() {
//     downloadIcon.classList.remove("animate-download");
//   }, 1000);
// }

// document.addEventListener("scroll", handleScroll);
// scrollToTopButton.addEventListener("click", function(e) {
//   e.preventDefault();
//   scrollToTop();
// });

// burgerButton.addEventListener("click", toggleMobileNav);
// siteNav.addEventListener("click", closeNav);
// downloadButton.addEventListener("click", animateDownloadButton);
