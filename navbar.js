$(window).load(function() {
    var header = $('.nav');
    if (header.offset().top > 5) {
        if (!header.hasClass('chang')) {
            header.addClass('chang');
        }
    } else {
        header.removeClass('chang');
    }
    $(window).scroll(function(e) {
        if (header.offset().top > 60) {
            if (!header.hasClass('chang')) {
                header.addClass('chang');
            }
        } else {
            header.removeClass('chang');
        }
    });
});
