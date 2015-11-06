$(window).load(function() {
    var x1 = 0; //定義初始坐標值
    var header = $('.nav'); //指定class
    //初始化頂端座標的距離
    if (header.offset().top > 5) {
        if (!header.hasClass('change')) {
            //新增class
            header.addClass('change');
        }
    } else {
        //移除class
        header.removeClass('change');
    }
    //開始滾動時與端座標的距離
    $(window).scroll(function(e) {

        if (header.offset().top > 5) {
            if (!header.hasClass('change')) {
                header.addClass('change');
            }
            //將變數x2指定為x1的值
            var x2 = x1;
            //重新抓取目前最新作標值
            x1 = header.offset().top;
            //當 x1 > x2 為頁面下拉觸發   
            if (x1 > x2 && header.offset().top > 100) {
                $('.navbox').stop(true); //停止剩餘未執行的動畫列表
                //$('.navbox').slideUp('slow'); //也可使用
                $('.navbox').animate({
                    top: "-50px"
                });
            }
            //當 x1 < x2 為頁面上拉觸發  
            if (x1 < x2 || header.offset().top < 100) {
                $('.navbox').stop(true); //停止剩餘未執行的動畫列表
                //$('.navbox').slideDown('slow'); //也可使用
                $('.navbox').animate({
                    top: "0px"
                });
            }

        } else {
            header.removeClass('change');
        }
    });
});
