$(function () {
    $(".status").mouseover(function () {
        $(".sss").show();
        $(".www").hide();
    }).mouseout(function () {
        $(".www").show();
        $(".sss").hide();
    });
});