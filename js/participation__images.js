$(document).ready(function(){
  $(".owl-carousel").owlCarousel ({
   items: 3,
   loop: true,
   nav: true,
   autoplay:true,
   autoplayTimeout:3000,
   autoplayHoverPause:true
  });
  $('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[3000])
  })
  $('.stop').on('click',function(){
     owl.trigger('stop.owl.autoplay')
   })
});