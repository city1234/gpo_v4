//資料架構
var vm = new Vue({
    el: '#mainbanner,#newsPageout,#airship',
    data: {
        outwindow: false,//首页是否跳窗
        showpage: 0,//首页跳窗是第几个公告从0开始
        newnews: 1,//新闻新产品预告数量****delete
        bannerstyle: 0,
        slickstyle: false,
        nowlistpage: 0, //当前分页 product>0,content>1,event>2,download>3
        search: "",
        page:[
            {
                totalnews:0,//资料总数
                pagelistnum: 9, //每页显示条数
                nowpage: 1, // 当前页数
            },
            {
                totalnews: 0,//资料总数
                pagelistnum: 9, //每页显示条数
                nowpage: 1, // 当前页数
            },
            {
                totalnews: 0,//资料总数
                pagelistnum: 9, //每页显示条数
                nowpage: 1, // 当前页数
            },
            {
                totalnews: 0,//资料总数
                pagelistnum: 9, //每页显示条数
                nowpage: 1, // 当前页数
            }
        ],
        newss: [
            {
                newstype: 0,//资讯子分页类型 product>0,content>1,event>2,download>3
                importanttag: true,//产品专栏活动专栏头版,内容发布重点标签
                istopbanner: true,//是否首页展示
                clickto: false,//是否有内页跳窗公告
                link: "luckyairship/index.html",//点击连结,下载檔案
                mainbannerimg: "images/activebanner/mainbanner_01.jpg",//首页大图2500*1080
                bannerimg: "images/activebanner/infbanner_01.jpg",//公告内页小图1410*385
                name: "幸运相伴，让您梦想成真！",//公告名称(最好8个全形字以内),download活动素材/轮播图
                time: "即将上线",//活动日期
                containtext: '\
                    <div style="text-align:center;"><a href="luckyairship/index.html" target="_blank">前往活动连结</a></div>'//内容html
            },
            {
                newstype: 0,
                importanttag: false,
                istopbanner: false,
                clickto: true,
                link: "javascript: void(0)",
                mainbannerimg: "images/activebanner/mainbanner.jpg",
                bannerimg: "images/activebanner/infbanner.jpg",
                name: "2018新春特惠活动",
                time: "2018/01/30",
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
                newstype: 0,
                importanttag: false,
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
                newstype: 1,
                importanttag: false,
                istopbanner: false,
                clickto: false,
                link: "javascript: void(0)",
                mainbannerimg: "",
                bannerimg: "无资料",
                name: "无资料",
                time: "无资料",
                containtexts: "无资料",
                containtext: "无资料"
            },
            /*
            {
                newstype: 1,
                importanttag: false,
                istopbanner: false,
                clickto: true,
                link: "javascript: void(0)",
                mainbannerimg: "",
                bannerimg: "",
                name: "V2.5彩票系统",
                time: "2018/01/30",
                containtexts: '【XXXXX项目】XXX项目升级啦，详戳图片，GO，内容区块可能延伸的范围，内容内容内容！！',
                containtext: '\
<table>\
    <tr>\
        <td>模块</td>\
        <td>需求点描述</td>\
        <td width="80">类型</td>\
    </tr >\
    <tr>\
        <td>手机端H5增加手机游戏客户端下载</td>\
        <td class="txtleft">1.发布内容发布内容发布内容发布内容发布内容 <br />\
            2.发布内容发布内容发布内容发布内容发布内容发布内容发布内容发 布内容内容发布内容 <br />\
            3.发布内容发布内容发布内容发布 <br />\
            4.发布内容发布内容发布内容发布内容发</td>\
        <td>新需求</td>\
    </tr>\
    <tr>\
        <td>手机端H5增加手机游戏客户</td>\
        <td class="txtleft">1.发布内容发布内容发布内容发布 <br />\
            2.发布内容发布内容发布内容发布内容发布内容发布内容发布内容发 布内容内容发布内容 <br />\
            3.发布内容发布内容发布内容发布内容发布内容内容发布内容<br /></td>\
        <td>新需求</td>\
    </tr>\
    <tr>\
        <td>手机端H5增加手戏客户</td>\
        <td class="txtleft">1.发布内容发布内容发布内容发布 <br />\
            2.发布内容发布内容发布内容发布内容发布内容发布内容发布内容发 布内容内容发布内容容发布内容容发布内容</td>\
        <td>新需求</td>\
    </tr>\
    <tr>\
        <td>手机端H5增加手机游戏客户端下载</td>\
        <td class="txtleft">1.发布内容发布内容发布内容发布内容发布内容 <br />\
            2.发布内容发布内容发布内容发布内容发布内容发布内容发布内容发 布内容内容发布内容 <br />\
            3.发布内容发布内容发布内容发布 <br />\
            4.发布内容发布内容发布内容发布内容发</td>\
        <td>新需求</td>\
    </tr>\
</table >'
            },*/
            {
                newstype: 2,
                importanttag: true,
                istopbanner: false,
                clickto: true,
                link: "javascript: void(0)",
                mainbannerimg: "images/activebanner/mainbanner_pp.jpg",
                bannerimg: "images/activebanner/infbanner_pp.jpg",
                name: "过关斩将锦标赛",
                time: "2018/04/05",
                containtext: '\
                    <div style="max-width:800px;margin:0 auto;"><div align="center">过关斩将锦标赛，50万谁与争锋 每周奖金池高达88,000元</div>\
                    <br/>Dates:\
                    <br/>锦标赛1：2018年4月5日至2018年4月8日\
                    <br/>锦标赛2：2018年4月12日至2018年4月15日\
                    <br/>锦标赛3：2018年4月19日至2018年4月22日\
                    <br/>锦标赛4：2018年4月26日至2018年4月29日\
                    <br/>锦标赛5：2018年5月3日至2018年5月6日\
                    <br/>锦标赛6：2018年5月10日至2018年5月13日\
                    <br/><br/>机制：旋转次数\
                    <br/>最低下注：0.30美元（1.90人民币）\
                    <br/>符合条件的游戏：所有PP老虎机，但不包括：888 Gold、 Diamonds are Forever 3 Lines、 Irish Charms、 Money Roll、Queen of Gold、桌面游戏(Table games)和其他游戏(Other games) 。\
                    <br/>* 有关包含所有符合条件的游戏的详细列表，请联系您的客户经理\
                    <br/>每周奖池：超过<span class= "redtxt" >88.800元</span>人民币\
                    <br/><div class="txtcenter"><div class="inpagebtn">每周排行榜点击这里</div></div>\
                    <br/>奖金池累计总奖金超过<span class= "redtxt" >50万</span>人民币\
                    <br/><br/><br/>运营商有责任确保我们的产品和服务符合他们国家的适用法律。\
                    <br/>现金奖励不能有任何投注要求。如果玩家希望提款，他们可以立即提款。\
                    <br/>需要选择加入。如果您希望参加促销活动，请在4月4日周三前与您的客户经理联系。\
                    <br/>必须在网站，通讯和其他媒体（包括社交媒体）上使用过关斩将锦标赛专用促销包的元素。\
                    <br/>为了符合网络推广资格，参赛游戏必须在突出的大厅位置展示。\
                    <br/>PP保留随时修改，暂停或取消促销的权利。</div>'
            },
            {
                newstype: 2,
                importanttag: false,
                istopbanner: false,
                clickto: false,
                link: "http://www.fishhuntergames.com/events/apr2018/",
                mainbannerimg: "",
                bannerimg: "http://www.fishhuntergames.com/events/apr2018/img/bg.jpg",
                name: "宝箱宝宝大迁徙",
                time: "2018/04/23",
                containtext: '在打鱼过程中,宝箱宝宝不定时在游戏中出现。只需通过点击将其抓获，可获得丰富奖金。每次金额不确定，最高多达5000元。'
            },
            {
                newstype: 2,
                importanttag: false,
                istopbanner: false,
                clickto: false,
                link: "http://xingaming.com/event_standalone.html",
                mainbannerimg: "",
                bannerimg: "http://xingaming.com/img/event-coinBattle/banner_1920x870_ZH.jpg",
                name: "百万英雄金币王   通关翻倍天天赏",
                time: "2018/04/18",
                containtext: '金拉霸，猛龙传奇，金龙珠，XIN哥来了'
            },
            {
                newstype: 2,
                importanttag: false,
                istopbanner: false,
                clickto: false,
                link: "http://yoplay.com/news/guessredpacket_apr18/",
                mainbannerimg: "",
                bannerimg: "http://yoplay.com/news/guessredpacket_apr18/img/banner.png",
                name: "YOPLAY 猜红包活动，四月再次来袭",
                time: "2018/04/11",
                containtext: '全民猜红包，猜中就给你 '
            },
            {
                newstype: 2,
                importanttag: false,
                istopbanner: false,
                clickto: false,
                link: "http://www.xingaming.com/zh_event.html",
                mainbannerimg: "",
                bannerimg: "http://www.xingaming.com/img/event-coinBattle/banner_1920x870_ZH.jpg",
                name: "XIN哥來了",
                time: "2018/03/26",
                containtext: ''
            },
            {
                newstype: 2,
                importanttag: false,
                istopbanner: false,
                clickto: false,
                link: "http://www.fishhuntergames.com/events/march2018/",
                mainbannerimg: "",
                bannerimg: "http://www.fishhuntergames.com/events/march2018/img/bg.jpg",
                name: "礼金大派送",
                time: "2018/03/20",
                containtext: ''
            },
            {
                newstype: 2,
                importanttag: false,
                istopbanner: false,
                clickto: false,
                link: "http://yoplay.com/news/guessredpacket/",
                mainbannerimg: "",
                bannerimg: "http://yoplay.com/news/guessredpacket/img/banner.jpg",
                name: "猜红包活动",
                time: "2018/03/07",
                containtext: ''
            },
            {
                newstype: 3,
                importanttag: false,
                istopbanner: false,
                clickto: false,
                link: "javascript: void(0)",
                mainbannerimg: "",
                bannerimg: "",
                name: "活动素材/轮播图",
                time: "无资料",
                containtext: '无资料'
            }
        ]
    },
    methods: {
        newsnavlist: function(index){
            this.nowlistpage = index;
            this.search = "";
            $(".newsnavlist>div>li").eq(index).addClass("active").siblings().removeClass("active");
            $("#newsPage01 .newsnavlist>div>li").eq(index).addClass("active").siblings().removeClass("active");
            $("html").getNiceScroll().resize();
            $("html").getNiceScroll().remove();
            var agent = navigator.userAgent.toLowerCase();
            if (agent.match("android") || agent.match("iphone") || agent.match("ipad")) { } else {
                nice = $("html").niceScroll({ scrollspeed: 51, mousescrollstep: 45, cursorwidth: "5px", cursorcolor: "#222", cursorborder: "0px solid #fff" });
            };
        },
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
        },
        /*
        filterlist: function (newss){
            return this.newss.filter((news) => {
                return news.name.match(this.search);
            });
        }
        */
        filterlist: function (newss){
            return this.newss.filter((news) => {
                return news.name.match(this.search);
            });
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