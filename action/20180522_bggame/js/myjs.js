$(document).ready(function() {
    /*pagelink*/
    var showpage = 0;
    showpage_fn();
    function showpage_fn(){
        $(".inpage").eq(showpage).fadeIn(300).siblings(".inpage").fadeOut(0);
        $(".card").eq(showpage).addClass("active").siblings(".card").removeClass("active");

    }
    /*linkhashanimate*/
    $(function() {
        $(".card").click(function() {
            showpage = $(this).index();
            showpage_fn();
            var target = $(this.hash);
            $("html,body").animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        });
    });
    /*endlinkhashanimate*/
    if ($(this).scrollTop() > 100) {
        $('.totop').fadeIn(300);
    } else {
        $('.totop').fadeOut(300);
    }
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

});
