$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$(".hamburger").css({"color":"white"});
				$(".cross").css({"color":"white"});
				$(".menu a").css({"color":"white"});
				$("header").css({"background-color": "black"});
				$("header").css({"opacity":"0.9"});
				
				flag = true;
			}
		}else{
			if(flag){
				$(".hamburger").css({"color":"black"});
				$(".cross").css({"color":"black"});
				$(".menu a").css({"color":"black"});
				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});

});


$(".cross").hide();
$(".menu").hide();
$(".hamburger").click(function() {
  $(".menu").slideToggle("slow", function() {
    $(".hamburger").hide();
    $(".cross").show();
  });
});

$(".cross").click(function() {
  $(".menu").slideToggle("slow", function() {
    $(".cross").hide();
    $(".hamburger").show();
  });
});