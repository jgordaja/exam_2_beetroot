$(document).ready(function() { 
    $('.hero__slider').slick({ 
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        adaptiveHeight: true,
        accessibility: true,
        arrows: false, 
        swipe: true, 
        mobileFirst: true, 
        dots: true,
        // vertical: true,
        // verticalSwiping: true,
        // rtl: true,
    });

    $('.news__list').slick({ 
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false, 
        fade: false,
        adaptiveHeight: true,
        accessibility: true,
        arrows: true, 
        swipe: true, 
        mobileFirst: true, 
        dots: true, 
        prevArrow: `<a href="#" class="btn__link prev_arrow">
                        <span class="btn__icon icon-chevron-small-left"></span>
                    </a>`,
        nextArrow: `<a href="#" class="btn__link next_arrow">
                        <span class="btn__icon icon-chevron-small-right"></span>
                    </a>`,
    });
});