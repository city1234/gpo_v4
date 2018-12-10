$(document).ready(function() {
    /*
    $(window).mousemove(function( event ) {
        var myVideo = document.getElementById("bgvid");
        myVideo.play();
    });
    */
    $(window).scroll(function () {
        /*
        var myVid = document.getElementById("video");
        myVid.muted = true;
        var myVideo = document.getElementById("bgvid");
       myVideo.play();
        */
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
    function testAutoPlay () {
        // 返回一个promise以告诉调用者检测结果
        return new Promise(resolve => {
            let audio = document.createElement('audio');
            // require一个本地文件，会变成base64格式
            audio.src = require('@/assets/empty-audio.mp3');
            document.body.appendChild(audio);
            let autoplay = true;
            // play返回的是一个promise
            audio.play().then(() => {
                // 支持自动播放
                autoplay = true;
            }).catch(err => {
                // 不支持自动播放
                autoplay = false;
            }).finally(() => {
                audio.remove();
                // 告诉调用者结果
                resolve(autoplay);
            });
        });
    }
    if (agent.match("android") || agent.match("iphone") || agent.match("ipad")) {
        $("#bgvid").remove();
    } else {
    };
    $(function() {
        $('a.scroll[href*="#"]').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 500, 'linear');
        });
    });
});
