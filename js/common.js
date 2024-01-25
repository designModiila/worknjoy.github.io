// jQuery 메뉴 메이커 플러그인
(function($) {
  $.fn.menumaker = function(options) {  
    var settings = $.extend({
      format: "dropdown",
      sticky: false
    }, options);

    return this.each(function() {
      var nav = $(this);
      nav.find(".button").on('click', function() {
        $(this).toggleClass('menu-opened');
        var mainmenu = $(this).next('ul');
        mainmenu.slideToggle().toggleClass('open');
        if (settings.format === "dropdown") {
          mainmenu.find('ul').show();
        }
      });

      nav.find('li ul').parent().addClass('has-sub');
      if (settings.format === 'multitoggle') {
        nav.find(".has-sub").prepend('<span class="submenu-button"></span>');
        nav.find('.submenu-button').on('click', function() {
          $(this).toggleClass('submenu-opened').siblings('ul').slideToggle().toggleClass('open');
        });
      } else {
        nav.addClass('dropdown');
      }

      if (settings.sticky === true) {
        nav.css('position', 'fixed');
      }

      $(window).on('resize', function() {
        if ($(window).width() > 1000) {
          nav.find('ul').show();
        } else {
          nav.find('ul').hide().removeClass('open');
        }
      }).trigger('resize');
    });
  };
})(jQuery);

// 메뉴 메이커 초기화
$(document).ready(function() {
  $("#nav").menumaker({
    format: "multitoggle"
  });
});

// 스크롤에 따른 헤더 클래스 토글
const header = document.getElementById("header");
window.addEventListener("scroll", function() {
  header.classList.toggle("fixed", window.pageYOffset > 0);
});

gsap.registerPlugin(ScrollTrigger);
document.querySelectorAll(".content02, .content04, .content06, .content07, .content08, .content09, .content10, .content13").forEach((section, index) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top +50%",
      end: "top +=400",
      toggleActions: "play none none none"
    }
  });


  // 텍스트 박스 애니메이션
  tl.fromTo(
    section.querySelectorAll(".ani__text"),
    { opacity: 0, transform: "translateY(50%)" },
    { opacity: 1, transform: "translateY(0%)", delay: 0.3, duration: 0.7 },
    "show"
  );


  tl.fromTo(
      section.querySelectorAll(".ani__subtext"),
      { opacity: 0, transform: "translateY(200%)" },
      { opacity: 1, transform: "translateY(0%)", delay: 0.5, duration: 0.7 },
      "show"
    );

    tl.fromTo(
      section.querySelectorAll(".ani__btn"),
      { opacity: 0, transform: "translateY(100%)" },
      { opacity: 1, transform: "translateY(0%)", delay: 0.7, duration: 0.7 },
      "show"
    );

});

document.querySelectorAll(".content03, .content11, .content14").forEach((section2, index) => {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: section2,
      start: "top +50%",
      end: "top +=300",
      toggleActions: "play none none none"
    }
  });


  // 텍스트 박스 애니메이션
  tl2.fromTo(
    section2.querySelectorAll(".ani__text"),
    { opacity: 0, transform: "translateY(100%)" },
    { opacity: 1, transform: "translateY(0%)", delay: 0.3, duration: 0.7 },
    "show"
  );
  tl2.fromTo(
      section2.querySelectorAll(".ani__subtext"),
      { opacity: 0, transform: "translateY(200%)" },
      { opacity: 1, transform: "translateY(0%)", delay: 0.5, duration: 0.7 },
      "show"
    );

    tl2.fromTo(
      section2.querySelectorAll(".ani__btn"),
      { opacity: 0, transform: "translateY(100%)" },
      { opacity: 1, transform: "translateY(0%)", delay: 0.7, duration: 0.7 },
      "show"
    );

});

document.querySelectorAll(".content01").forEach((section3, index) => {
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: section3,
      start: "top +300",
      end: "top +=180",
      toggleActions: "play none none none"
    }
  });


  // 텍스트 박스 애니메이션
  tl3.fromTo(
    section3.querySelectorAll(".ani__text"),
    { opacity: 0, transform: "translateY(50%)" },
    { opacity: 1, transform: "translateY(0%)", delay: 0.3, duration: 0.7 },
    "show"
  );

  tl3.fromTo(
    section3.querySelectorAll(".ani__btn"),
    { opacity: 0, transform: "translateY(100%)" },
    { opacity: 1, transform: "translateY(0%)", delay: 0.5, duration: 0.7 },
    "show"
  );

  tl3.fromTo(
      section3.querySelectorAll(".ani__subtext"),
      { opacity: 0, transform: "translateY(200%)" },
      { opacity: 1, transform: "translateY(0%)", delay: 0.7, duration: 0.7 },
      "show"
    );


});

document.querySelectorAll(".content05").forEach((section4, index) => {
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: section4,
      start: "top +50%",
      end: "top +=300",
      toggleActions: "play none none none"
    }
  });


  // 텍스트 박스 애니메이션
  tl3.fromTo(
    section4.querySelectorAll(".ani__text"),
    { opacity: 0, transform: "translateY(50%)" },
    { opacity: 1, transform: "translateY(0%)", delay: 0.3, duration: 0.7 },
    "show"
  );


  tl3.fromTo(
      section4.querySelectorAll(".ani__subtext"),
      { opacity: 0, transform: "translateY(100%)" },
      { opacity: 1, transform: "translateY(0%)", delay: 0.5, duration: 0.7 },
      "show"
    );
    tl3.fromTo(
      section4.querySelectorAll(".ani__thumbnail"),
      { opacity: 0, transform: "translateY(30%)" },
      { opacity: 1, transform: "translateY(0%)", delay: 0.5, duration: 0.7 },
      "show"
    );
    tl3.fromTo(
      section4.querySelectorAll(".ani__btn"),
      { opacity: 0, transform: "translateY(100%)" },
      { opacity: 1, transform: "translateY(0%)", delay: 0.7, duration: 0.7 },
      "show"
    );

});
document.querySelectorAll(".content12").forEach((section5, index) => {
  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: section5,
      start: "top +300",
      end: "top +=180",
      toggleActions: "play none none none"
    }
  });


  // 텍스트 박스 애니메이션
  tl4.fromTo(
    section5.querySelectorAll(".ani__text"),
    { opacity: 0, transform: "translateY(50%)" },
    { opacity: 1, transform: "translateY(0%)", delay: 0.3, duration: 0.7 },
    "show"
  );


  tl4.fromTo(
      section5.querySelectorAll(".ani__subtext"),
      { opacity: 0, transform: "translateY(100%)" },
      { opacity: 1, transform: "translateY(0%)", delay: 0.5, duration: 0.7 },
      "show"
    );
    tl4.fromTo(
      section5.querySelectorAll(".ani__thumbnail"),
      { opacity: 0, transform: "translateY(50%)" },
      { opacity: 1, transform: "translateY(0%)", delay: 0.5, duration: 1 },
      "show"
    );
    tl4.fromTo(
      section5.querySelectorAll(".ani__btn"),
      { opacity: 0, transform: "translateY(100%)" },
      { opacity: 1, transform: "translateY(0%)", delay: 0.7, duration: 0.7 },
      "show"
    );

});

// Swiper 슬라이더 초기화
$(document).ready(function() {
  new Swiper('.swiper-container', {
    autoHeight: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "1.5",
    loop: true,
    loopedSlides: 3,
    coverflowEffect: {
      rotate: 0,
      stretch: 41,
      depth: 300,
      modifier: 2,
      slideShadows: true
    },
    autoplay: {
      delay: 10000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-container-wrap .swiper-button-next",
      prevEl: ".swiper-container-wrap .swiper-button-prev"
    }
  });
});


   const btnFree = document.getElementById('btnFree');
   const content01 = document.querySelector('.content01');
   const content14 = document.querySelector('.content14');
   
   window.addEventListener('scroll', function() {
     const content01Bottom = content01.getBoundingClientRect().bottom;
     const content14Top = content14.getBoundingClientRect().top;
     const viewportHeight = window.innerHeight;
   
     btnFree.classList.toggle('floating', content01Bottom < 0 && content14Top >= viewportHeight);
     btnFree.classList.toggle('hidden', content14Top < viewportHeight);
   });