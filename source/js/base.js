$(function() {
    var mobileMenu = $('.base-mobile-menu');
    var menuToggler = $('#mobile-menu-toggle');
    var baseMenu = $('.base-mobile-menu');
    var menuWrapper = $('.mobile-menu-wrapper');
    var contentHeight = mobileMenu.find('.menu-content').height();
    menuToggler.click(function(event) {
        var height = 0;
        if (menuWrapper.hasClass('open')) {
            height = 48;
            menuWrapper.removeClass('open');
        } else {
            height = contentHeight;
            menuWrapper.addClass('open');
        }
        baseMenu.height(height);
    });
});
