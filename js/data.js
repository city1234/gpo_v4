//資料架構
var vm = new Vue({
    el: '#mainbanner,#newsPage01,#airship',
    data: {
<<<<<<< HEAD
        
        outwindow: false,//是否跳窗
        showpage: 0,//首页跳窗是第几个公告从0开始
        newnews: 1,//新闻新产品预告数量****delete
        /* */
        totalnews:0,//资料总数
        pagelistnum: 9, //每页显示条数
        nowpage: 1, // 当前页数
        /* */
=======
        //首页跳窗是第几个公告从0开始
        showpage: 0,
        //新闻新产品预告数量
        newnews: 1,
>>>>>>> 7acb63d312d85596372465846af6792fe9765d11
        bannerstyle: 0,
        slickstyle: false,
        newss: [
            {
<<<<<<< HEAD
                newstype: 1,//资讯类型 product>1,content>2,event>3,download>4
                istopbanner: true,//是否首页展示
                clickto: false,//是否有内页公告
                link: "luckyairship/index.html",//点击连结,下载檔案
                mainbannerimg: "images/activebanner/mainbanner_01.jpg",//首页大图2500*1080
                bannerimg: "images/activebanner/infbanner_01.jpg",//公告内页小图1410*385
                name: "幸运相伴，让您梦想成真！",//公告名称(最好8个全形字以内)
                time: "即将上线",//活动日期
                containtext: '\
                    <div style="text-align:center;"><a href="luckyairship/index.html" target="_blank">前往活动连结</a></div>'//内容html
=======
                //是否首页展示
                istopbanner: true,
                //是否有内页公告
                clickto: false,
                //点击连结
                link: "luckyairship/index.html",
                //首页大图2500*1080
                mainbannerimg: "images/activebanner/mainbanner_01.jpg",
                //公告内页小图1410*385
                bannerimg: "images/activebanner/infbanner_01.jpg",
                //公告名称(最好8个全形字以内)
                name: "幸运相伴，让您梦想成真！",
                //活动日期
                time: "即将上线",
                //内容html
                containtext: '\
                    <div style="text-align:center;"><a href="luckyairship/index.html" target="_blank">前往活动连结</a></div>'
>>>>>>> 7acb63d312d85596372465846af6792fe9765d11
            },
            {
                istopbanner: false,
                clickto: true,
                link: "javascript: void(0)",
                mainbannerimg: "images/activebanner/mainbanner.jpg",
                bannerimg: "images/activebanner/infbanner.jpg",
                name: "2018新春特惠活动",
                time: "2018/1/30",
                containtext: '\
                    东方包网平台为答谢各位新老客户多年的支持与厚爱在春节来临之际特别推出\
                    <span class= "redtxt" > 新春特惠活动</span>，凡此活动期间在我司开设游戏网站\
                    <span class= "redtxt" > 开版费！服务费！费用统统全免！</span> 活动时间2018年2月1日至3月31日名额仅限58名、开完即止。\
                    <br /> 2018年系统\
                    <span class= "underline" > 全新升级</span > 接入热门游戏\
                    <span class= "underline" > PRG电子</span >、\
                    <span class="underline">VG棋牌</span>、\
                    <span class="underline">CMD体育</span>、现火爆内测中、更多热门游戏正在接入中……敬请期待！\
                    <br /> 高效稳定的系统！亲切优惠的价格！结合最新最火爆的游戏，专业打造只属于您的游戏平台，心动不如马上行动！详情咨询官方客服人员！\
                    <br />\
                    <br />东方平台官网：\
                    <a href="http://www.og-bwt.com" target="_blank">www.og-bwt.com</a> &nbsp;&nbsp;\
                    <a href="http://www.op88888.com" target="_blank">www.op88888.com</a> &nbsp;&nbsp;&nbsp; 官方客服：QQ: 2158999999 &nbsp;&nbsp; 电话：0063-9157165666\
                    <br />\
                    <br />\
                    <br /> 东方平台全体员工祝您新的一年生意兴隆！财源广进！兴旺发达！'
            },
            {
<<<<<<< HEAD
                istopbanner: false,
                clickto: false,
                link: "v1.0/index.html",
                mainbannerimg: "",
                bannerimg: "images/newsBigBanner.png",
                name: "【H5游戏主页改版】新架构，新体验，详戳图片！！",
                time: "2018/01/30",
                containtext: ''
            },
            {
                istopbanner: false,
                clickto: false,
                link: "v1.0/index.html",
                mainbannerimg: "",
                bannerimg: "images/newsBigBanner.png",
                name: "【H5游戏主页改版】新架构，新体验，详戳图片！！",
                time: "2018/01/30",
                containtext: ''
            },
            {
                istopbanner: false,
                clickto: false,
                link: "v1.0/index.html",
                mainbannerimg: "",
                bannerimg: "images/newsBigBanner.png",
                name: "【H5游戏主页改版】新架构，新体验，详戳图片！！",
                time: "2018/01/30",
                containtext: ''
            },
            {
=======
>>>>>>> 7acb63d312d85596372465846af6792fe9765d11
                istopbanner: false,
                clickto: false,
                link: "v1.0/index.html",
                mainbannerimg: "",
                bannerimg: "images/newsBigBanner.png",
                name: "【H5游戏主页改版】新架构，新体验，详戳图片！！",
<<<<<<< HEAD
                time: "2018/01/30",
                containtext: ''
            },
            {
                istopbanner: false,
                clickto: false,
                link: "v1.0/index.html",
                mainbannerimg: "",
                bannerimg: "images/newsBigBanner.png",
                name: "【H5游戏主页改版】新架构，新体验，详戳图片！！",
                time: "2018/01/30",
                containtext: ''
            },
            {
                istopbanner: false,
                clickto: false,
                link: "v1.0/index.html",
                mainbannerimg: "",
                bannerimg: "images/newsBigBanner.png",
                name: "【H5游戏主页改版】新架构，新体验，详戳图片！！",
                time: "2018/01/30",
                containtext: ''
            },
            {
                istopbanner: false,
                clickto: false,
                link: "v1.0/index.html",
                mainbannerimg: "",
                bannerimg: "images/newsBigBanner.png",
                name: "【H5游戏主页改版】新架构，新体验，详戳图片！！",
                time: "2018/01/30",
                containtext: ''
            },
            {
                istopbanner: false,
                clickto: false,
                link: "v1.0/index.html",
                mainbannerimg: "",
                bannerimg: "images/newsBigBanner.png",
                name: "【H5游戏主页改版】新架构，新体验，详戳图片！！",
                time: "2018/01/30",
                containtext: ''
            },
            {
                istopbanner: false,
                clickto: false,
                link: "v1.0/index.html",
                mainbannerimg: "",
                bannerimg: "images/newsBigBanner.png",
                name: "【H5游戏主页改版】新架构，新体验，详戳图片！！",
                time: "2018/01/30",
=======
                time: "更新日期：2018/01/30",
>>>>>>> 7acb63d312d85596372465846af6792fe9765d11
                containtext: ''
            }
        ]
    },
    methods: {
        clickindex: function(index) {
            this.showpage = index;
            if (index == this.showpage) {
                return true;
            } else {
                return false;
            }
        },
        intopagevif: function(index) {
            if (index == this.showpage) {
                return true;
            } else {
                return false;
            }
        },
        clicktoopen: function(index) {
            if (this.newss[index].clickto) {
                return "_self";
            } else {
                return "_blank";
            }
        }
    },
    computed: {
<<<<<<< HEAD
=======
        /*
        cancelAlert_fn: function () {
            if (this.upshowpage == false) {
                return addCookie("cancelAlert", "1", 1);
            }
        },
        */
>>>>>>> 7acb63d312d85596372465846af6792fe9765d11
        bannerstyle_fn: function() {
            bannerstyle = this.newss.length - this.newnews;
            if (bannerstyle == 1) {
                this.slickstyle = false;
                return "bannerboxstyle_one";
            } else if (bannerstyle == 2) {
                this.slickstyle = false;
                return "bannerboxstyle_two";
            } else if (bannerstyle > 2) {
                this.slickstyle = true;
                return "bannerboxstyle_one";
            }
        }
    },
    mounted: function () {
        //设置cookie
        Vue.prototype.setCookie = (c_name, value, expiredays) => {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + expiredays);
            document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
        }
        //获取cookie、
        function getCookie(name) {
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return (arr[2]);
            else
                return null;
        }
        Vue.prototype.getCookie = getCookie;
        //删除cookie
        Vue.prototype.delCookie = (name) => {
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            var cval = getCookie(name);
            if (cval != null)
                document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
        }
        if (!this.outwindow){
            this.setCookie("cancelAlert", "1", 1);
        }
    }
});