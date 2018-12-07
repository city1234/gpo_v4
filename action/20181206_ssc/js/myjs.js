$(document).ready(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.totop').fadeIn(300);
        } else {
            $('.totop').fadeOut(300);
        }
    });
    $('.totop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    new WOW().init();
    var agent = navigator.userAgent.toLowerCase();
    if (agent.match("android") || agent.match("iphone") || agent.match("ipad")) {
        $("#bgvid").remove();
    } else {
    };
});
