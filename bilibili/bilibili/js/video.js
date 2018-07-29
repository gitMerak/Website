$(function () {
    $(".groom-module img").mouseover(function () {
        $(this).siblings("p").hide();
    }).mouseout(function () {
        $(this).siblings("p").show();
    });
});