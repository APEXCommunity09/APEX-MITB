$(document).ready(function() {
  $('.testimonial-slider').slick({
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 600,
      draggable: true,
      infinite: true,
      slidesToShow: 3, 
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
            }
          },
          {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
              }
          }
      ]
  });
});
