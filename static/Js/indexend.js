/// <reference path="jquery-1.4.1.min.js" />

$(function () {
    //fall snow--begin
    $(document).snowfall('clear');
    $(document).snowfall({
        image: "images/huaban.png",
        flakeCount: 30,
        minSize: 5,
        maxSize: 22
    });
    //fall snow--end



    //    $(".topshow ul li a").click(function () {
    //        var pos = $(this).offset();
    //        var html = "<div id='mydiv' style='position:absolute; top:" + (pos.top - 200) + "px; left:" + pos.left + "px;'><img src='" + $(this).attr("mysrcval") + "'/></div>";
    //        // alert(html);
    //        $("body").append(html);
    //    }).mouseout(function () {
    //        $("#mydiv").attr("display", "");
    //    });

    //    $("#mydiv").click(function () {
    //        $(this).attr("display", "");
    //    });


    // scroll down- begin

    $("#tt").jscroll({
        W: "55px",
        Btn: { btn: false },
        BgUrl: "url(images/piao3.png)",
        Bg: "-200px 0 no-repeat",
        Bar: {
            Bd: {},
            Bg: { Out: "0 0 no-repeat", Hover: "0 0 no-repeat", Focus: "0 0 no-repeat" }
        }
    })

    $("a.zoom").hover(function () {
        $(this).children("img:first").attr("src", "/images/index_2.gif")
    }, function () {
        $(this).children("img:first").attr("src", "/images/index_3.gif")
    })

    $("input.zoom").hover(function () {
        $(this).addClass("zoom-h")
    }, function () {
        $(this).removeClass("zoom-h")
    })


    $(".piao").mousedown(function (e) {
        var _move = true;
        $(document).mousemove(function (e) {
            if (_move) {
                var y = e.offsetY;
                $(".piao").css("top", y - 300 + "px");

            }
            $(document).mouseup(function (e) {
                _move = false;
            })
        })
    })

    $("#back_top").click(function () {
        $("html,body").animate({ scrollTop: 0 }, "fast")
    })

    // show the class="topshow"  picture --begin
    $(".topshow ul li a").hover(function () {
        $(this).children("img").show()
    }, function () {
        $(this).children("img").hide()
    })
    // show the class="topshow"  picture --end

    //scroll down- end

    function checkMaxInput(obj, maxLen) {
        // obj.value=obj.value.replace(/<[^>].*?>/g,""); 
        var m = obj.value.length;
        var n = m;
        var j = 0;
        for (var i = 0; i < m; i++) {
            if (obj.value.charCodeAt(i) < 0 || obj.value.charCodeAt(i) > 161) {
                n = n + 1;
                if (i < 100) {
                    j = j + 1;
                }
            }
        }
        if (n > maxLen) {
            obj.value = obj.value.substring(0, maxLen - j);
        }
    }


    //    $("input.search").keyup(function (event) {
    //        checkMaxInput(event.target, 76);
    //    })

    //    $("input.search").keydown(function (event) {
    //        checkMaxInput(event.target, 76);
    //    })


    //-----------------------display the image begin---------------------
    $("#topshowaaa ul li a").click(function () {
        $("#picImg").attr("src", "");
        var picPath = $(this).attr("picSrcVal");
        var picWord = $(this).attr("picword");
        var who = $(this).attr("who");
        var wholeWord = "【" + who + "】 说：\n" + picWord;
        // alert(picPath);
        $("#dialog").css("display", "block");
        $("#picImg").attr("src", picPath);
        $("#sheSay").text(wholeWord);
    });

    $("#btnClose").click(function () {
        $("#dialog").css("display", "");
    });
    //-----------------------display the image end---------------------

    //-----------------------display the left to right scroll image begin---------------------
    
    //-----------------------display the left to right scroll image end-----------------------


    //----------------------check  mobile logon on---------------------
    function checkMobile() {
        var pda_user_agent_list = new Array("2.0 MMP", "240320", "AvantGo", "BlackBerry", "Blazer",
            "Cellphone", "Danger", "DoCoMo", "Elaine/3.0", "EudoraWeb", "hiptop", "IEMobile", "KYOCERA/WX310K", "LG/U990",
            "MIDP-2.0", "MMEF20", "MOT-V", "NetFront", "Newt", "Nintendo Wii", "Nitro", "Nokia",
            "Opera Mini", "Opera Mobi",
            "Palm", "Playstation Portable", "portalmmm", "Proxinet", "ProxiNet",
            "SHARP-TQ-GX10", "Small", "SonyEricsson", "Symbian OS", "SymbianOS", "TS21i-10", "UP.Browser", "UP.Link",
            "Windows CE", "WinWAP", "Androi", "iPhone", "iPod", "iPad", "Windows Phone", "HTC");
        var pda_app_name_list = new Array("Microsoft Pocket Internet Explorer");

        var user_agent = navigator.userAgent.toString();
        for (var i = 0; i < pda_user_agent_list.length; i++) {
            if (user_agent.indexOf(pda_user_agent_list[i]) >= 0) {
                return true;
            }
        }
        var appName = navigator.appName.toString();
        for (var i = 0; i < pda_app_name_list.length; i++) {
            if (user_agent.indexOf(pda_app_name_list[i]) >= 0) {
                return true;
            }
        }

        return false;
    }
    if (checkMobile())
        alert("你目前使用手持设备（比如手机）进行浏览小小东网站，由于时间关系，未对手持设备进行支持，所以不能保证手机下全部功能正常运行，可能会有兼容性方面的问题。（如需观看视频，请安装相应的flash插件）强烈建议在电脑下查看并用最新浏览器。谢谢理解");

    //----------------------check  mobile logon on---------------------


})();

