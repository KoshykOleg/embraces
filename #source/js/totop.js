function backToTop() {
   let button = $('.to_top');

   $(window).on('scroll', () => {
      if ($(this).scrollTop() >= 100) {
         button.fadeIn();
      } else {
         button.fadeOut();
      }
   });

   button.on('click', (e) => {
      e.preventDefault();
      $('a').animate({scrollTop: 0}, 1000);
   })
}

backToTop();











/* const toTop = document.querySelector(".to_top");

window.addEventListener("scroll", () => {
   if (window.pageYOffset > 100) {
      toTop.classlist.add("active");
   } else {
      toTop.classList.remove("active");
   }
}) */