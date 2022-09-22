const swiper = new Swiper('.MySwiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    // slider gallery
    centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });