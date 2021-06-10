$(function ($) {

    //    var MainNav = $('.nightNav'),
    //        wIn = $(window);
    //    var menuofset = MainNav.offset().top;
    //    wIn.on('scroll', function () {
    //        var scrol = wIn.scrollTop();
    //        if (scrol > menuofset) {
    //            MainNav.addClass('menufix');
    //        } else {
    //            MainNav.removeClass('menufix');
    //        }
    //        //        if (scrol > 500) {
    //        //            $('.backTop').addClass('backTopbottom');
    //        //            $('.backTop').fadeIn(1000);
    //        //        } else {
    //        //            $('.backTop').removeClass('backTopbottom');
    //        //            $('.backTop').fadeOut(1000);
    //        //        }
    //    });

    var MainNav = $('.nightNav'),
        wIn = $(window);
    var menuofset = MainNav.offset().top;
    wIn.on('scroll', function () {
        var scrol = wIn.scrollTop();
        if (scrol > menuofset) {
            MainNav.addClass('menufix');
        } else {
            MainNav.removeClass('menufix');
        }
        if (scrol > 500) {
            $('.backTop').addClass('backTopbtm');
            $('.backTop').fadeIn(1000);
        } else {
            $('.backTop').removeClass('backTopbtm');
            $('.backTop').fadeOut(1000);
        }
    })
    $('.backTop').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    })

    $('#myNav ul li').on('click', function () {
        $('#myNav ul li').removeClass('active');
        $(this).addClass('active');
    })

    $('.ftr_signup ul li').on('click', function () {
        $('.ftr_signup ul li').removeClass('active');
        $(this).addClass('active');

    });

    wIn.on('load', function () {
        $('.preloader_main').delay(800).fadeOut(2000);
    })
    $('.slick_slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        arrows: true,
        prevArrow: '<i class="fas fa-angle-left ar_left"></i>',
        nextArrow: '<i class="fas fa-angle-right ar_right"></i>',
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
          },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
          },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 2000,
                    speed: 1500,
                }
          }
        ]
    });

    $('.blog_slide').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="fas fa-angle-left ar_left"></i>',
        nextArrow: '<i class="fas fa-angle-right ar_right"></i>',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
          },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
          },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 2000,
                    speed: 1500,
                }
          }
        ]
    });


    $('.tesimonial_slide').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="fas fa-angle-left ar_left"></i>',
        nextArrow: '<i class="fas fa-angle-right ar_right"></i>',
        dots: true,
        dotsClass: 'slick-dots',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
          },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                }
          },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 2000,
                    speed: 1500,
                }
          }
        ]
    });
});
