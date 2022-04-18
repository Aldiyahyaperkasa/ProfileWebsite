var typed = new Typed(".typing", {
  strings: ["Mahasiswa IT", "Freelancer", "Front-End Junior"],
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
