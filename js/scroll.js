// Smooth scrolling when clicking an anchor link
$(document).ready(function () {

    // Klick auf eien Link, der eine Raute (# = Anker) enthÃ¤lt
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 750, 'swing', function () {
            window.location.hash = target;
        });
    });
});