$(document).ready(function () {
    // 寬度小於750
    if ($(window).width() < 750) {
        $("#menu01").click(function () {
            $("#menu01 .menuPop_m").toggleClass("active");
            $("#menu02 .menuPop,#menu03 .menuPop,#menu04 .menuPop").removeClass("active");
        });
        $("#menu02").click(function () {
            $("#menu02 .menuPop").toggleClass("active");
            $("#menu01 .menuPop,#menu03 .menuPop,#menu04 .menuPop").removeClass("active");
        });
        $("#menu03").click(function () {
            $("#menu03 .menuPop").toggleClass("active");
            $("#menu02 .menuPop,#menu01 .menuPop,#menu04 .menuPop").removeClass("active");
        });
        $("#menu04").click(function () {
            $("#menu04 .menuPop").toggleClass("active");
            $("#menu02 .menuPop,#menu03 .menuPop,#menu01 .menuPop").removeClass("active");
        });
    } else {
        $("#menu01 .menuPop").removeClass("active");
        $("#menu02 .menuPop").removeClass("active");
        $("#menu03 .menuPop").removeClass("active");
        $("#menu04 .menuPop").removeClass("active");
    };

    // 點擊畫面其他地方關閉選單
    $("body").click(function () {
        $("#menu01 .menuPop,#menu03 .menuPop,#menu04 .menuPop").removeClass("active");
    });
    $("#menu01,#menu03,#menu04,#menu01 .menuPop_m,#menu03 .menuPop,#menu04 .menuPop").click(function (e) {
        e.stopPropagation();
    });

});