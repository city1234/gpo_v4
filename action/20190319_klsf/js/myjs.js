$(document).ready(function() {
    /*niceScroll*/
    //$("html").niceScroll({ cursorwidth: "8px", mousescrollstep: 50, scrollspeed: 50 });
    //$("html").niceScroll({ styler: "fb", cursorcolor: "#6f1602", autohidemode: false, cursorborder: "0px solid #fff", cursorwidth: "8px", zindex: 999 });
    /*endniceScroll*/
    $('.productlist_slick').slick({
        dots: false,
        infinite: true,
        speed: 300
        //slidesToShow: 2
    });
    /*animatetop*/
    $(".top").click(function() {
        $('html,body').animate({ scrollTop: 0 }, 300);
    });
    /*endanimatetop*/


    /*linkhashanimate*/
    $(function() {
        $(".awardlistbtn a").click(function() {
            var target = $(this.hash);
            $("html,body").animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        });
    });
    /*endlinkhashanimate*/
    var aud = document.getElementById("bgvid");
    aud.onended = function() {
        $(this).fadeOut();
    };
});
