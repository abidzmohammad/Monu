
// Hero slider activation
$(document).ready(function(){
   $('.slider-active').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
   });
});


$(document).ready(function(){
   $('.counter').counterUp({
      delay: 10,
      time: 2000
  });
});

$(document).ready(function(){
   $('.testimonial-active').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots:true,
   });
});


