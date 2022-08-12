// Toastify({
//     text: "This is a toast",
//     duration: 3000,
//     close: true,
// }).showToast();

// Notification Close Button 
var closebtns = document.getElementsByClassName("closeNotification");
var i;
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}
// Notification Close Button Ends

// Testimonial Slider Start
const swiper = new Swiper('.mySwiper', {
  // slidesPerView: "4",
  spaceBetween: 30,
  // autoplay: {
  //   delay: 3000,
  // },

  pagination: {
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // Responsive breakpoints
  breakpoints: {
    1400: {
      slidesPerView: "4"
    },
    1200: {
      slidesPerView: "3"
    },
    992: {
      slidesPerView: "2",
      spaceBetween: "20"
    },
    640: {
      slidesPerView: "1",
      spaceBetween: "0"
    }
  }

});
// Testimonial Slider Ends

// Products Slider Start
var productNavSlider = new Swiper(".product-nav-slider", {
  loop: !1,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: !0,
  watchSlidesProgress: !0
}),
productThubnailSlider = new Swiper(".product-thumbnail-slider", {
  loop: !1,
  spaceBetween: 24,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
  },
  thumbs: {
      swiper: productNavSlider
  }
});
// Products Slider Ends

// AOS Animation Intialization Start
AOS.init();
// AOS Animation Intialization Ends

// JS Loader Start
function k() {
  var e = document.querySelectorAll(".counter-value");

  function s(e) {
      return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
  e && Array.from(e).forEach(function(o) {
      ! function e() {
          var t = +o.getAttribute("data-target"),
              a = +o.innerText,
              n = t / 250;
          n < 1 && (n = 1), a < t ? (o.innerText = (a + n).toFixed(0), setTimeout(e, 1)) : o.innerText = s(t), s(o.innerText)
      }()
  })
}
// JS Loader Ends

