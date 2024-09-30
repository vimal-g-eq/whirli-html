$(".js-carousel-track").slick({
  centerMode: true,
  centerPadding: "100px",
  slidesToShow: 3,
  dots: false,
  arrows: false,
  infinite: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 967,
      settings: {
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

// shpo bt brand

$(".js-carousel-track-shop").slick({
  centerMode: true,
  centerPadding: "140px",
  slidesToShow: 5,
  dots: false,
  arrows: true,
  infinite: true,
  slidesToScroll: 1,
  prevArrow: $(".js-ingredients-prev-shop"),
  nextArrow: $(".js-ingredients-next-shop"),
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1240,
      settings: {
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 967,
      settings: {
        centerMode: true,
        centerPadding: "50px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
  ],
});

// new slider
$(".js-carousel-track-new").slick({
  centerMode: true,
  centerPadding: "100px",
  slidesToShow: 3,
  dots: false,
  arrows: true,
  infinite: true,
  slidesToScroll: 1,
  prevArrow: $(".js-ingredients-prev-new"),
  nextArrow: $(".js-ingredients-next-new"),
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 967,
      settings: {
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});
// shop by name 
$(".js-carousel-track-shop-by-play").slick({
  centerMode: true,
  centerPadding: "100px",
  slidesToShow: 3,
  dots: false,
  arrows: true,
  infinite: true,
  slidesToScroll: 1,
  prevArrow: $(".js-ingredients-prev-shop-by-play"),
  nextArrow: $(".js-ingredients-next-shop-by-play"),
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 967,
      settings: {
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

//  real reaviwe from real parents

$(".js-carousel-track-review").slick({
  centerMode: true,
  centerPadding: "100px",
  slidesToShow: 3,
  dots: false,
  arrows: true,
  infinite: true,
  slidesToScroll: 1,
  prevArrow: $(".js-ingredients-prev-review"),
  nextArrow: $(".js-ingredients-next-review"),
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 967,
      settings: {
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});