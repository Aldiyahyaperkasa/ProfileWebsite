var typed = new Typed(".typing", {
  strings: ["Fresh Graduate", "Freelancer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// swipper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
});

$(window).on("load", function () {
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    portfolioIsotope.isotope({
      filter: $(this).data("filter"),
    });
  });
});

$(document).ready(function () {
  $(".venobox").venobox();
});
