$('body').materialScrollTop();
//ScrollSpy ========================
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar'
})
AOS.init();
// sticy nav==============
$(window).scroll(function () {
    var sticky = $('.navbar'),
        scroll = $(window).scrollTop();
    if (scroll >= 120) sticky.addClass('sticky-top opacity');
    else sticky.removeClass('sticky-top opacity');
});
