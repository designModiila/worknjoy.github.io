


(function($) {
    $.fn.menumaker = function(options) {  
     var nav = $(this), settings = $.extend({
       format: "dropdown",
       sticky: false
     }, options);
     return this.each(function() {
       $(this).find(".button").on('click', function(){
         $(this).toggleClass('menu-opened');
         var mainmenu = $(this).next('ul');
         if (mainmenu.hasClass('open')) { 
           mainmenu.slideToggle().removeClass('open');
         }
         else {
           mainmenu.slideToggle().addClass('open');
           if (settings.format === "dropdown") {
             mainmenu.find('ul').show();
           }
         }
       });
       nav.find('li ul').parent().addClass('has-sub');
    multiTg = function() {
         nav.find(".has-sub").prepend('<span class="submenu-button"></span>');
         nav.find('.submenu-button').on('click', function() {
           $(this).toggleClass('submenu-opened');
           if ($(this).siblings('ul').hasClass('open')) {
             $(this).siblings('ul').removeClass('open').slideToggle();
           }
           else {
             $(this).siblings('ul').addClass('open').slideToggle();
           }
         });
       };
       if (settings.format === 'multitoggle') multiTg();
       else nav.addClass('dropdown');
       if (settings.sticky === true) nav.css('position', 'fixed');
    resizeFix = function() {
      var mediasize = 1000;
         if ($( window ).width() > mediasize) {
           nav.find('ul').show();
         }
         if ($(window).width() <= mediasize) {
           nav.find('ul').hide().removeClass('open');
         }
       };
       resizeFix();
       return $(window).on('resize', resizeFix);
     });
      };
    })(jQuery);
    
    (function($){
    $(document).ready(function(){
    $("#nav").menumaker({
       format: "multitoggle"
    });
    });
    })(jQuery);
    

//     const container = document.querySelector('.images-line');
// const images = container.querySelectorAll('.rolling-image');
// const imageWidth = images[0].offsetWidth + parseInt(getComputedStyle(images[0]).marginLeft) + parseInt(getComputedStyle(images[0]).marginRight);

// // 초기 이미지 복제
// images.forEach((image) => {
// const clone = image.cloneNode(true);
// container.appendChild(clone);
// });

// let currentPosition = 0;

// function rolling() {
// currentPosition -= 7; // 이동할 픽셀 양을 5로 조정
// if (currentPosition < -imageWidth * images.length) {
//     currentPosition = 0;
// }

// container.style.transform = `translateX(${currentPosition}px)`;

// setTimeout(rolling, 180); // 200ms마다 이미지 이동
// }

// window.addEventListener('load', rolling);
