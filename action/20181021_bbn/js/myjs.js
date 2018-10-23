$(document).ready(function() {
    /*pagelink*/
    var showpage = 0;
    showpage_fn();
    function showpage_fn(){
        $(".inpage").eq(showpage).fadeIn(300).siblings(".inpage").fadeOut(0);
        $(".card").eq(showpage).addClass("active").siblings(".card").removeClass("active");
    }
    /*inpagelink*/
    var showinpage = 0;
    showinpage_fn();
    function showinpage_fn(){
        $(".boborder>.img").eq(showinpage).fadeIn(300).siblings(".img").fadeOut(0);
        $(".btnbox>.bubtn").eq(showinpage).addClass("active").siblings(".bubtn").removeClass("active");
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
        $(".btnbox>.bubtn").click(function() {
            showinpage = $(this).index();
            showinpage_fn();
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
