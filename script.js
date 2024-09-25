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
