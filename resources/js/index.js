// JavaScript Document
$(document).ready(function () {
	var ctime = null;
	var ctime_seconds = null;

	$("#toggle1").click(function () {
		ctime = setInterval(function () {
			var time = new Date();
			var hours = time.getHours();
			var minutes = time.getMinutes();
			var seconds = time.getSeconds();
			var minutes2 = (minutes * 60 + seconds) / 10; //Convert minutes to angles
			if (hours > 12) { hours = hours - 12; } //Convert 24 hour clock to 12 hour clock
			hours = ((hours * 3600) + (minutes * 60 + seconds)) / 120; //Convert hour to angle
			$(".Hour_hand").css("transform", "rotate(" + hours + "deg)");
			$(".Minute_hand").css("transform", "rotate(" + minutes2 + "deg)");
		}, 1000);
		ctime_seconds = setInterval(function () {
			var time = new Date();
			var seconds = time.getSeconds();
			var Milliseconds = time.getMilliseconds();
			var seconds2 = (seconds+(Milliseconds/1000)) * 6;
			$("#Second_hand").css("transform", "rotate(" + seconds2 + "deg)");
		}, 50);
		$(".Hour_hand,.Minute_hand").css("animation", "none");
		$("#Second_hand").css("display", "block");
		$("#toggle1").css("display", "none");
		$("#toggle2").css("display", "inline");
	});

	$("#toggle2").click(function () {
		$(".Second_breathe").toggle("Second_breathe");
		$(".Hour_breathe").toggle("Hour_breathe");
		$(".Minute_breathe").toggle("Minute_breathe");
		$(".Dial_info").toggle("Dial_info");
		$(".Dial_breathe").toggle("Dial_breathe");
		$(".guide_text").toggle("guide_text");
		$("#toggle2").css("display", "none");
		$("#toggle3").css("display", "inline");
	});

	$("#toggle3").click(function () {
		clearInterval(ctime);
		clearInterval(ctime_seconds);
		$(".Hour_breathe").toggle("Hour_breathe");
		$(".Minute_breathe").toggle("Minute_breathe");
		$(".Dial_info").toggle("Dial_info");
		$(".Dial_breathe").toggle("Dial_breathe");
		$(".guide_text").toggle("guide_text");
		$(".Dial_info").css("text-shadow", "0 0 50px hsla(0,0%,100%,1.00)");
		$(".Hour_hand1").css("animation", "Hour_hand 2.3s forwards");
		$(".Hour_hand2").css("animation", "Hour_hand 2.8s forwards");
		$(".Hour_hand3").css("animation", "Hour_hand 3.2s forwards");
		$(".Hour_hand4").css("animation", "Hour_hand 3.5s forwards");
		$(".Hour_hand5").css("animation", "Hour_hand 3.8s forwards");
		$(".Minute_hand").css("animation", "Minute_hand 2.3s forwards");
		$("#Second_hand").css("display", "none");
		$("#toggle3").css("display", "none");
		$("#toggle1").css("display", "inline");
	});

});
