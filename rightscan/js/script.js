document.addEventListener("DOMContentLoaded", function() {
    try{
        $('.goods-slider').slick({
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1360,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
              },
              {
                breakpoint: 830,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
              },
              {
                breakpoint: 580,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
              }
            ]
          });
          $('.banner-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            dots: true
          });
        } catch (e) {}

});