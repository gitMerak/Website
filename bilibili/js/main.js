$(function () {
   $("#a").mouseover(function () {
       $(this).children("ul").show();
   });
   $("#a").mouseout(function () {
       $(this).children("ul").hide();
   });
   $(".blur-bg").mouseover(function () {
      $(this).siblings().children(".head-title").show();
   });
   $(".blur-bg").mouseout(function () {
       $(this).siblings().children(".head-title").hide();
   });
   $(".bili-header-m .nav-con1 .profile").mouseover(function () {
      $(this).children(".history-record-m").show();
   });
   $(".bili-header-m .nav-con1 .profile").mouseout(function () {
       $(this).children(".history-record-m").hide();
   });
});