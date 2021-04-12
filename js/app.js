// preloder js
$(window).load(function () {
    $("#preloder").delay(100).fadeOut("slow");
});

// back to top
var btn = $('#back_to_top');
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.css("display", "inline-block");
    } else {
        btn.css("display", "none");
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '900');
});

// Trick Fixed Navbar
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
        $('.navbar').addClass('bg-scrolling');
    }

    else {
        $('.navbar').removeClass('bg-scrolling');
    }
})

// smooth scrolling js
$(document).ready(function () {
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 100
        }, 900, 'swing', function () {

        });
    });
});

// active manu
$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();

    // Assign active class to nav links while scolling
    $('.smooth').each(function (i) {
        if ($(this).position().top - 100 <= scrollDistance) {
            $('.nav-item a.active').removeClass('active');
            $('.nav-item a').eq(i).addClass('active');
        }
    });
}).scroll();

// rotate toggle class
$('.rotate_element').click(function () {
    $('.rotate').toggleClass('rotate_change');
});

// type js
var typed = new Typed('.element', {
    strings: [
        'A Front end Developer.',
        'A Graphic Designer.',
        'A Photograper.'
    ],
    typeSpeed: 100,
    loop: true,
});

// swiper js
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
    // show if name ends with -ium
    ium: function () {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
    }
};
// bind filter button click
$('.filters-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});