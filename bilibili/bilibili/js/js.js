$(function () {
    $("#sc-box").mouseover(function () {
        $(this).children(".pre,.next").show();
    }).mouseout(function () {
        $(this).children(".pre,.next").hide();
    });
    //上一个事件
    $(".pre").click(function () {
       var index=$(".imgs img").index($(".imgs img:visible"));
       if(--index<0){
           alert("已经到第一个了，不能再点击了")
           return;
       }
       //不为0说明上一个元素，让上一个元素显示，让其他同辈元素隐藏
       //  $(".img img:visible").prev().show().sibling().hidden;
        var $now=$(".imgs img").eq(index);
       $now.show();//让切换后的元素显示
       $now.siblings().hide();//让其他元素隐藏
        //改原点——对应的原点设置上背景色，其他同辈元素移除掉背景色样式
        $(".btns li").eq(index).addClass("current").siblings().removeClass("current");
    });
    $(".next").click(function () {
        var index=$(".imgs img").index($(".imgs img:visible"));
        if(++index>3){
            alert("已经到最后一个了，不能再点击了");
            return;
        }
        //不为0说明上一个元素，让上一个元素显示，让其他同辈元素隐藏
        //  $(".img img:visible").prev().show().sibling().hidden;
        var $now=$(".imgs img").eq(index);
        $now.show();//让切换后的元素显示
        $now.siblings().hide();//让其他元素隐藏
        $(".btns li").eq(index).addClass("current").siblings().removeClass("current");
    });
});