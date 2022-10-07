$(document).ready(function() {
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        const link = $(this).attr('href');

        if (link !== '#') {
            $('html, body').animate({ 
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
        }
    });
});