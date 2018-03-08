//資料架構
var vm = new Vue({
    el: '#mainbanner,#newsPage01',
    data: {
        //首页跳窗是第几个公告从0开始
        showpage: 0,
        //新闻新产品预告数量
        newnews: 2,
        bannerstyle: 0,
        slickstyle: false,
        newss: [
            {
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
                time: "活动更新日期:2018/1/30",
                //内容html
                containtext: '\
                    <div style="text-align:center;"><a href="luckyairship/index.html" target="_blank">前往活动连结</a></div>'
            },
            {
                istopbanner: true,
                clickto: true,
                link: "javascript: void(0)",
                mainbannerimg: "images/activebanner/mainbanner.jpg",
                bannerimg: "images/activebanner/infbanner.jpg",
                name: "2018新春特惠活动",
                time: "活动更新日期:2018/1/30",
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
                istopbanner: false,
                clickto: false,
                link: "v1.0/index.html",
                mainbannerimg: "",
                bannerimg: "images/newsBigBanner.png",
                name: "【H5游戏主页改版】新架构，新体验，详戳图片！！",
                time: "即将上线",
                containtext: ''
            }
        ]
    },
    methods: {
        clickindex: function (index) {
            this.showpage = index;
            if (index == this.showpage) {
                return true; 
            } else {
                return false;
            }
        },
        intopagevif: function (index){
            if (index == this.showpage){
                return true;
            }else{
                return false;
            }
        },
        clicktoopen: function (index){
            if (this.newss[index].clickto){
                return "_self";
            }else{
                return "_blank";
            }
        }
    },
    computed:{
        bannerstyle_fn: function () {
            bannerstyle = this.newss.length - this.newnews;
            console.log(bannerstyle);
            if (bannerstyle == 1) {
                this.slickstyle = false;
                return "bannerboxstyle_one";
            } else if (bannerstyle == 2){
                this.slickstyle = false;
                return "bannerboxstyle_two";
            } else if (bannerstyle > 2){
                this.slickstyle = true;
                return "bannerboxstyle_one";
            }
        }
    }
});