(function(global){
    function remChange(){
        document.documentElement.style.fontSize=100*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //操作指南浮层
    var $explain_1 = $('.explain.fir'),
        $explain_2 = $('.explain.sec'),
        $explain_3 = $('.explain.thir'),
        $explain_4 = $('.explain.fou'),
        explainObj = {
        showExplain_1 : function () {
            $explain_1.show();
            showMask();
        },
        showExplain_2 : function () {
            $explain_2.show();
            showMask();
        },
        showExplain_3 : function () {
            $explain_3.show();
            showMask();
        },
        showExplain_4 : function () {
            $explain_4.show();
            showMask();
        },
        hideExplain_1 : function () {
            $explain_1.hide();
            hideMask();
        },
        hideExplain_2 : function () {
            $explain_2.hide();
            hideMask();
        },
        hideExplain_3 : function () {
            $explain_3.hide();
            hideMask();
        },
        hideExplain_4 : function () {
            $explain_4.hide();
            hideMask();
        }
    };
    explainObj.showExplain_1();
    $('#qdBtn').addClass('active');
    //首页分享按钮
    $('#share').on('click',function () {

    });
    //首页活动规则按钮
    $('#rule').on('click',function () {
        showMask();
    });
    //首页我的记录按钮
    $('#myRecord').on('click',function () {

    });
    //首页我要补签按钮
    $('#bqBtn').on('click',function () {
        if($(this).hasClass('active')){
            explainObj.hideExplain_2();
            explainObj.showExplain_3();
            $(this).removeClass('active');
        }
    });
    //首页一键签到按钮
    $('#qdBtn').on('click',function () {
        if($(this).hasClass('active')){
            explainObj.hideExplain_1();
            explainObj.showExplain_2();
            $(this).removeClass('active');
            $('#bqBtn').addClass('active');
        }

    });
    //首页我的奖品按钮
    $("#myPrize").on('click',function () {

    });
    //首页流量兑换铺按钮
    $('#shop').on('click',function () {
        if($(this).hasClass('active')){
            explainObj.hideExplain_4();
            $(this).removeClass('active');
        }
    });
    //操作指南第三步按钮
    $('#explain_3Btn').on('click',function () {
        explainObj.hideExplain_3();
        explainObj.showExplain_4();
        $('#shop').addClass('active');
    });

    //隐藏手机号中间4位
    var $phoneNum = $('.scrollBox ul li span:nth-child(1)');
    function hidePhoneNum(phoneNum) {
        $.each(phoneNum,function (i,e) {
            var val = e.innerText;
            var hideNum = val.substr(3,4);
            e.innerText = val.replace(hideNum,'****');
        });
    }
    
    //显示遮罩层    
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层  
    function hideMask(){
        $("#mask").hide();
    }

});
