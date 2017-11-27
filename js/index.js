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
        $mask = $('#mask'),
        explainObj = {
        showExplain_1 : function () {
            $mask.addClass('clickHide-1');
            $explain_1.show();
            showMask();
        },
        showExplain_2 : function () {
            $mask.addClass('clickHide-2');
            $explain_2.show();
            showMask();
        },
        showExplain_3 : function () {
            $mask.addClass('clickHide-3');
            $explain_3.show();
            showMask();
        },
        showExplain_4 : function () {
            $mask.addClass('clickHide-4');
            $explain_4.show();
            showMask();
        },
        hideExplain_1 : function () {
            $mask.removeClass('clickHide-1');
            $explain_1.hide();
            hideMask();
        },
        hideExplain_2 : function () {
            $mask.removeClass('clickHide-2');
            $explain_2.hide();
            hideMask();
        },
        hideExplain_3 : function () {
            $mask.removeClass('clickHide-3');
            $explain_3.hide();
            hideMask();
        },
        hideExplain_4 : function () {
            $mask.removeClass('clickHide-4');
            $explain_4.hide();
            hideMask();
        }
    };
    explainObj.showExplain_1();
    $('#mask').on('click',function () {
        var $this = $(this);
        if ($this.hasClass('clickHide-1')){
            $('#qdBtn').removeClass('active');
            $('#bqBtn').addClass('active');
            explainObj.hideExplain_1();
            explainObj.showExplain_2();
        }else if($this.hasClass('clickHide-2')){
            $('#bqBtn').removeClass('active');
            explainObj.hideExplain_2();
            explainObj.showExplain_3();
        }else if($this.hasClass('clickHide-3')){
            $('#shop').addClass('active');
            explainObj.hideExplain_3();
            explainObj.showExplain_4();
        }else if($this.hasClass('clickHide-4')){
            $('#shop').removeClass('active');
            explainObj.hideExplain_4();
        }
    });
    //弹窗显示关闭
    var tcUtils = {
        //签到获得金币记录弹窗显示
        showTc_record : function () {
            $('#tc_record').fadeIn();
            showMask();
        },
        //关闭金币记录弹窗
        hideTc_record : function () {
            $('#tc_record').hide();
            hideMask();
        },
        //这里空空如也弹窗显示
        showTc_nothing : function () {
            $('#tc_nothing').fadeIn();
            showMask();
        },
        //关闭这里空空如也弹窗
        hideTc_nothing : function () {
            $('#tc_nothing').hide();
            hideMask();
        },
        //已获得xx流量弹窗显示
        showTc_geting : function () {
            $('#tc_geting').fadeIn();
            showMask();
        },
        //关闭已获得xx流量弹窗
        hideTc_geting : function () {
            $('#tc_geting').hide();
            hideMask();
        },
        //需要登录10086弹窗显示
        showTc_needLogin : function () {
            $('#tc_needLogin').fadeIn();
            showMask();
        },
        //关闭需要登录弹窗
        hideTc_needLogin : function () {
            $('#tc_needLogin').hide();
            hideMask();
        },
        //活动结束弹窗显示
        showTc_end : function () {
            $('#tc_end').fadeIn();
            showMask();
        },
        //关闭活动结束弹窗
        hideTc_end : function () {
            $('#tc_end').hide();
            hideMask();
        },
        //签到成功获得金币弹窗显示
        showTc_success : function () {
            $('#tc_success').fadeIn();
            showMask();
        },
        //关闭签到成功获得金币弹窗
        hideTc_success : function () {
            $('#tc_success').hide();
            hideMask();
        },
        //补签任务弹窗显示
        showTc_task : function () {
            $('#tc_task').fadeIn();
            showMask();
        },
        //关闭补签任务弹窗
        hideTc_task : function () {
            $('#tc_task').hide();
            hideMask();
        },
        //不是受邀用户弹窗显示
        showTc_noPrivilege : function () {
            $('#tc_noPrivilege').fadeIn();
            showMask();
        },
        //关闭不是受邀用户弹窗
        hideTc_noPrivilege : function () {
            $('#tc_noPrivilege').hide();
            hideMask();
        },
        //是否确认兑换弹窗显示
        showTc_whether : function () {
            $('#tc_whether').fadeIn();
            showMask();
        },
        //关闭是否确认兑换弹窗
        hideTc_whether : function () {
            $('#tc_whether').hide();
            hideMask();
        },
        //来晚了弹窗显示
        showTc_late : function () {
            $('#tc_late').fadeIn();
            showMask();
        },
        //关闭来晚了弹窗
        hideTc_late : function () {
            $('#tc_late').hide();
            hideMask();
        },
        //兑换成功弹窗显示
        showTc_successful : function () {
            $('#tc_successful').fadeIn();
            showMask();
        },
        //关闭兑换成功弹窗
        hideTc_successful : function () {
            $('#tc_successful').hide();
            hideMask();
        },
        //不要贪心弹窗显示
        showTc_greedy : function () {
            $('#tc_greedy').fadeIn();
            showMask();
        },
        //关闭不要贪心弹窗
        hideTc_greedy : function () {
            $('#tc_greedy').hide();
            hideMask();
        }
    }
    //弹窗关闭按钮
    $('.modal-close-btn').on('click',function () {
        $(this).parents('div.modal').hide();
        hideMask();
    });
    $('#qdBtn').addClass('active');
    //首页分享按钮
    $('#share').on('click',function () {

    });
    //首页活动规则按钮
    $('#rule').on('click',function () {
        $('#tc_rule').fadeIn();
        showMask();
    });
    //首页我的记录按钮
    $('#myRecord').on('click',function () {
        tcUtils.showTc_record();
    });
    //首页我要补签按钮
    $('#bqBtn').on('click',function () {
        if($(this).hasClass('active')){
            explainObj.hideExplain_2();
            explainObj.showExplain_3();
            $(this).removeClass('active');
        }else{
            tcUtils.showTc_task();
        }
    });
    //首页一键签到按钮
    $('#qdBtn').on('click',function () {
        if($(this).hasClass('active')){
            explainObj.hideExplain_1();
            explainObj.showExplain_2();
            $(this).removeClass('active');
            $('#bqBtn').addClass('active');
        }else{//签到成功
            var randomNumber = Math.round(Math.random()*(10-1)+1);
            $('#goldNumber').text(randomNumber);
            tcUtils.showTc_success();
        }
    });
    //首页我的奖品按钮
    $("#myPrize").on('click',function () {
        tcUtils.showTc_nothing();
    });
    //首页流量兑换铺按钮
    $('#shop').on('click',function () {
        if($(this).hasClass('active')){
            explainObj.hideExplain_4();
            $(this).removeClass('active');
        }else{
            window.location.href = 'index1.html';
        }
    });
    //操作指南第三步按钮
    $('#explain_3Btn').on('click',function () {
        explainObj.hideExplain_3();
        explainObj.showExplain_4();
        $('#shop').addClass('active');
    });

    //二级页面兑换按钮
    $('#conversionBtn').on('click',function () {
        if($('#tab').find('li').hasClass('active')){
            var $index = $('#tab').find('li.active').index(),
                $flowNum = $('#flowNum');
            if($index === 0){
                $flowNum.text('100M');
            }else if($index === 1){
                $flowNum.text('200M');
            }else if($index === 2){
                $flowNum.text('500M');
            }else if($index === 3){
                $flowNum.text('1G');
            }
            tcUtils.showTc_whether();
        }else{
            alert('请选择您需要兑换的流量种类!');
        }
    });

    //隐藏手机号中间4位
    var $phoneNum = $('#telNum');
    function hidePhoneNum(phoneNum) {
        $.each(phoneNum,function (i,e) {
            var val = e.innerText;
            var hideNum = val.substr(3,4);
            e.innerText = val.replace(hideNum,'****');
        });
    }
    hidePhoneNum($phoneNum);
    //二级页面奖品切换
    $('#tab').on('click','li',function () {
        var $this = $(this),
            $index = $this.index();
        $this.addClass('active').siblings('li').removeClass('active');
        return $index;
    });
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
