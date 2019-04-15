$(document).ready(function() {
    /*niceScroll*/
    //$("html").niceScroll({ cursorwidth: "8px", mousescrollstep: 50, scrollspeed: 50 });
    //$("html").niceScroll({ styler: "fb", cursorcolor: "#6f1602", autohidemode: false, cursorborder: "0px solid #fff", cursorwidth: "8px", zindex: 999 });
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
    /*
    var aud = document.getElementById("bgvid");
    aud.onended = function() {
        $(this).fadeOut();
    };
    */
    /*player*/
    var videoSrc = $("#largeModal iframe").attr("src");
    $('#largeModal').on('show.bs.modal', function() {
        $("#largeModal iframe").attr("src", videoSrc + "?autoplay=1");
    }).on('hidden.bs.modal', function(e) {
        $("#largeModal iframe").attr("src", null);
    });

    var myVideo = document.getElementById('opVideo');
    $("#videoStared").click(function(){
        if (myVideo.paused){
            myVideo.play();
        } 
    });
    $("#closeVideo").click(function(){
        if (!myVideo.paused){
            myVideo.pause();
        }
    });
    $("#largeModal").not("#videoArea").click(function(){
        if (!myVideo.paused){
            myVideo.pause();
        }
    });
    var qaopen=0;
    qaopen_fn();
    function qaopen_fn(){
        $(".qalist ul").eq(qaopen).children(".aline").slideDown();
        $(".qalist ul").eq(qaopen).siblings().children(".aline").slideUp();
    }
    $(".qalist ul").click(function(){
        //console.log($(this).index());
        qaopen=$(this).index();
        qaopen_fn();
    })
});
