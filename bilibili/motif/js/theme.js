$(document).ready(function(){
    var me=$("li");
  me.mouseover(function () {
        $(this).children("div").addClass("showme");
        $(this).siblings().children("div").removeClass("showme");
        }).children().mouseout(function () {
        $(this).removeClass("showme");
    })
});