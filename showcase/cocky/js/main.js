$(document).ready(function(){

// GA
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-90394860-1', 'auto');
ga('send', 'pageview');


// SVG
var bigsvg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="1072.7px" height="660.5px" viewBox="0 0 1072.7 660.5"> <g> <path id="color1" d="M402.3,283.4c0,0-2.8,98.9,12.1,161.8s14.9,62.9,14.9,62.9s27.8,10.7,43.7,12 c15.9,1.4,43.5,2.7,43.5,2.7s11.6,0.9,40.9-2.3c29.3-3.2,41.6-7.7,41.6-7.7s16.2-40.5,20.7-76.2c0,0,15.6-98.1,11.3-153.2 c0,0-2.7-15-114-15S402.3,283.4,402.3,283.4z"/> <path id="color2" d="M402.3,283.4c0,0-2.8,98.9,12.1,161.8s14.9,62.9,14.9,62.9s27.8,10.7,43.7,12 c15.9,1.4,43.5,2.7,43.5,2.7s11.6,0.9,40.9-2.3c29.3-3.2,41.6-7.7,41.6-7.7s16.2-40.5,20.7-76.2c0,0,15.6-98.1,11.3-153.2 c0,0-2.7-15-114-15S402.3,283.4,402.3,283.4z"/> <path id="color3" d="M402.3,283.4c0,0-2.8,98.9,12.1,161.8s14.9,62.9,14.9,62.9s27.8,10.7,43.7,12 c15.9,1.4,43.5,2.7,43.5,2.7s11.6,0.9,40.9-2.3c29.3-3.2,41.6-7.7,41.6-7.7s16.2-40.5,20.7-76.2c0,0,15.6-98.1,11.3-153.2 c0,0-2.7-15-114-15S402.3,283.4,402.3,283.4z"/> <path id="color4" d="M402.3,283.4c0,0-2.8,98.9,12.1,161.8s14.9,62.9,14.9,62.9s27.8,10.7,43.7,12 c15.9,1.4,43.5,2.7,43.5,2.7s11.6,0.9,40.9-2.3c29.3-3.2,41.6-7.7,41.6-7.7s16.2-40.5,20.7-76.2c0,0,15.6-98.1,11.3-153.2 c0,0-2.7-15-114-15S402.3,283.4,402.3,283.4z"/> <image class="glass_big"style="overflow:visible;" width="1032" height="665" xlink:href="img/glass.png"></image> <image class="cup" style="overflow:visible;" width="1000" height="642" xlink:href="img/cup.png" transform="matrix(0.734 0 0 0.734 338.7119 188.44)"></image> </g> <linearGradient id="ORANGE" gradientUnits="userSpaceOnUse" x1="516.9644" y1="520.9493" x2="516.9644" y2="270.3954"> <stop  offset="0" style="stop-color:#E9A77D;stop-opacity:0.7"/> <stop  offset="0.6372" style="stop-color:#DA6C26"/> <stop  offset="0.9892" style="stop-color:#A3511C;stop-opacity:0.8"/> </linearGradient> <linearGradient id="RED" gradientUnits="userSpaceOnUse" x1="516.9644" y1="520.9493" x2="516.9644" y2="270.3954"> <stop  offset="0" style="stop-color:#EFB7A7;stop-opacity:0.7"/> <stop  offset="0.6372" style="stop-color:#D74C23"/> <stop  offset="0.9892" style="stop-color:#A1391A;stop-opacity:0.8"/> </linearGradient> <linearGradient id="GREEN" gradientUnits="userSpaceOnUse" x1="516.9644" y1="520.9493" x2="516.9644" y2="270.3954"> <stop  offset="0" style="stop-color:#9ECAB1;stop-opacity:0.7"/> <stop  offset="0.6372" style="stop-color:#0C7A3B"/> <stop  offset="0.9892" style="stop-color:#095C2C;stop-opacity:0.8"/> </linearGradient> <linearGradient id="LIME" gradientUnits="userSpaceOnUse" x1="516.9644" y1="520.9493" x2="516.9644" y2="270.3954"> <stop  offset="0" style="stop-color:#CBDCB1;stop-opacity:0.7"/> <stop  offset="0.6372" style="stop-color:#7EA83D"/> <stop  offset="0.9892" style="stop-color:#5F7E2E;stop-opacity:0.8"/> </linearGradient> </svg>'


// Initialize

var menustatus = 0;
var changing = 0 ;
var speed = "500";
var bgnow = "#bg1";
var colornow = "#color1";
var smokenow = "#smoke1";
var smokepicnow = "#smoke1pic";
detectwindow();

$("#exit").hide();
$("#menu").show();
$("#bg2").css('opacity','0');
$("#bg3").css('opacity','0');
$("#bg4").css('opacity','0');
$("#color2").css('opacity','0');
$("#color3").css('opacity','0');
$("#color4").css('opacity','0');
$("#smoke1pic").css('opacity','0');
$("#smoke2pic").css('opacity','0');
$(".darken").hide();
$(".video").hide();


// Disable iOS Scroll

document.ontouchmove = function(event){
    event.preventDefault();
}


// Listener

$(".icon").click(function(){
	menuclick();
});

$(".play").click(function(){
	$(".video").show();
	$(".youtube").show();
	$(".video").animate({opacity:'1'},500,function(){
		$(".youtube").attr("src","https://www.youtube.com/embed/aOUb73mJkN4?autoplay=1&rel=0&controls=0&showinfo=0");
	});
});

$(".video").click(function(){
	$(".youtube").hide();
	$(".youtube").attr("src","");
	$(".video").animate({opacity:'0'},500,function(){
		$(".video").hide();
	});
});

$(document).mousemove(function(){
	changcolor();
});


// Functions

function menuclick(){
	if (menustatus == 0){
		$(".darken").show();
		$(".title").show();
		$(".darken").animate({opacity:'1'},speed);
		$(".title").animate({opacity:'1'},speed);
		$("#exit").show();
		$("#exit").animate({opacity:'1'},speed);
		$("#burger").hide();
		$("#burger").animate({opacity:'0'},speed);
		setTimeout(function(){ $("#burger").hide();},speed);
		menustatus = 1;
		console.log(menustatus);
	}
	else if (menustatus == 1){
		$(".darken").animate({opacity:'0'},speed);
		setTimeout(function(){ $(".darken").hide();},speed);
		$(".title").animate({opacity:'0'},speed);
		setTimeout(function(){ $(".title").hide();},speed);
		$("#exit").animate({opacity:'0'},speed);
		setTimeout(function(){ $("#exit").hide();},speed);
		$("#burger").show();
		$("#burger").animate({opacity:'1'},speed);
		menustatus = 0;
		console.log(menustatus);
	}
}

function detectwindow() {
	var width = $(window).width();
	var urlnow = window.location.href;
    if (width >= 1051) {
		smoke();
		// icemove();
		$(".glass").append(bigsvg);
    	if (urlnow.match("mobile")){
			location.href = "index.html";
		}
    }
    else if (width <= 1050) {
  		$(".title").hide();
		if (!urlnow.match("mobile")){
			location.href = "mobile.html";
		}
    }
}

function changcolor() {
	if (changing == 0){
		changing = 1 ;
		$(bgnow).animate({opacity: '0'},3000);
		$(colornow).animate({opacity:'0'},3000);
		switch(bgnow) {
			case "#bg1":
				bgnow = "#bg2";
				colornow = "#color2";
				break; 
			case "#bg2":
				bgnow = "#bg3";
				colornow = "#color3";
				break;
			case "#bg3":
				bgnow = "#bg4";
				colornow = "#color4";
				break;
			case "#bg4":
				bgnow = "#bg1";
				colornow = "#color1";
				break;
		}
		$(colornow).animate({opacity:'1'},1500);
		$(bgnow).animate({opacity:'0.9'},1500,function() {
			changing = 0;
		});
	}
}


function smoke() {
	$(smokepicnow).animate({opacity:'1'},4000,function() {
		$(smokepicnow).animate({opacity:'0.3'},8000,function() {
			$(smokepicnow).animate({opacity:'0'},3000,function() {
				switch(smokenow) {
					case "#smoke1":
						smokenow = "#smoke2";
						smokepicnow = "#smoke2pic";
						break; 
					case "#smoke2":
						smokenow = "#smoke1";
						smokepicnow = "#smoke1pic";
						break;
				}
				$(smokenow).css('top','0');
				smoke();
			});
		});
	});
	$(smokenow).animate({top:'-55%'},30000);
}

function icemove() {
	$("#ice").animate({left:'3px',top:'3px'},1500,function() {
		$("#ice").animate({left:'0px',top:'-4px'},1500,function() {
			$("#ice").animate({left:'-2px',top:'2px'},1500,function() {
				$("#ice").animate({left:'0px',top:'-6px'},1500);
				icemove();
			});
		});
	});
}


});

