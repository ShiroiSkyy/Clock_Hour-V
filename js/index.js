// JavaScript Document
$(document).ready(function(){
var ctime=null;
	
$("#toggleTime").mousedown(function(){
  ctime=setInterval(function(){
  var time = new Date(); //获取时间
  var hours = time.getHours();  //获取小时
  var minutes = time.getMinutes();  //获取分钟
  var seconds =time.getSeconds();  //获取秒数
  var minutes2 = (minutes*60+seconds)/10;  //将分钟换算成角度
    if(hours>12){hours=hours-12;}  //将24小时制换算成12小时制
    hours=((hours*3600)+(minutes*60+seconds))/120;  //将小时换算成角度
    $(".twoTime").css("transform","rotate("+hours+"deg)");
    $(".oneTime").css("transform","rotate("+minutes2+"deg)");
  },1000);
	$(".two0Time,.two1Time,.two2Time,.two3Time,.two4Time,.oneTime").css("animation","none");
  $("#toggleTime").css("display","none");
  $("#toggleTime2").css("display","inline");
});

$("#toggleTime2").mousedown(function(){
  $(".two0Time0").toggle("two0Time0");
  $(".oneTime1").toggle("oneTime1");
  $(".fontTime").toggle("fontTime");
  $(".DialTime0-2").toggle("DialTime0-2");
  $("#toggleTime2").css("display","none");
  $("#toggleTime3").css("display","inline");
});

$("#toggleTime3").mousedown(function(){
  clearInterval(ctime);
  $(".two0Time0").toggle("two0Time0");
  $(".oneTime1").toggle("oneTime1");
  $(".fontTime").toggle("fontTime");
  $(".DialTime0-2").toggle("DialTime0-2");
  $(".fontTime").css("text-shadow","0 0 50px hsla(0,0%,100%,1.00)");
  $(".two0Time").css("animation","twoTime 2.3s forwards");
  $(".two1Time").css("animation","twoTime 2.8s forwards");
  $(".two2Time").css("animation","twoTime 3.2s forwards");
  $(".two3Time").css("animation","twoTime 3.5s forwards");
  $(".two4Time").css("animation","twoTime 3.8s forwards");
  $(".oneTime").css("animation","oneTime 2.3s forwards");
  $("#toggleTime3").css("display","none");
  $("#toggleTime").css("display","inline");
});

});
