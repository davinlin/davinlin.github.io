
// $('<img id="loader" src="img/loader.gif">').appendTo('body');
$('#animate').hide();
$('#three').hide();

$(function(){
	// $('#loader'). hide();
	// setTimeout()
	$('#animate').show();
	moveUp();
});
function moveUp(){
	$('#big_candle').animate({'top':'23%','left':'50%'},1200,function(){
		$('#candle-dripUp').animate({'opacity':'1'},700);
		moveLeft();
	});
}
function moveLeft(){
	$('#big_candle').animate({'top':'41%','left':'38%'},1200,function(){
		$('#candle-dripLeft').animate({'opacity':'1'},700);
		moveDown();
	});
}
function moveDown(){
	$('#big_candle').animate({'top':'55%','left':'50%'},1200,function(){
		$('#candle-dripDown').animate({'opacity':'1'},700);
		moveRight();
		// $('#three').fadeOut();
	});
}
function moveRight(){
	$('#big_candle').animate({'top':'43%','left':'58%'},1200,function(){
		$('#candle-dripRight').animate({'opacity':'1'},700);
		// moveLeft();
		
		$('#big_candle').fadeOut('slow',function(){
			animation();
		});
	});
}
function animation(){
	setTimeout( show ,700);
}
var showTime = 0;
function show(){
	 $('#noise')[0].play();
	 $('#girl').animate({opacity:1});
	 $('#signal').animate({opacity:1});
	 setTimeout( hide ,400);
	 showTime++;
};
function hide(){
	$('#noise')[0].pause();
	$('#girl').animate({opacity:0});
	$('#signal').animate({opacity:0});
	if(showTime>=2){
		$('#three').fadeIn();
		return;
	}
	setTimeout( show ,1200);
}

var n = 0;
function title(){
	switch(n) {
		case 1:
      		$("#head").text("幽魂聊天室.");
      		n = 2;
      		break;
   		case 2:
      		$("#head").text("幽魂聊天室..");
      		n = 3;
      		break;
   		case 3:
    		$("#head").text("幽魂聊天室...");
      		n = 4;
      		break;
      	case 4:
      		$("#head").text("幽魂聊天室...登");
      		n = 5;
      		break;
      	case 5:
      		$("#head").text("幽魂聊天室...登入");
      		n = 6;
      		break;
		case 6:
      		$("#head").text("幽魂聊天室...登入中");
      		n = 0;
      		break;
    	default:
      		$("#head").text("幽魂聊天室");
      		n = 1;
      		break;
	}
	setTimeout(title,600);
}
title();

$('#three').mouseover(function(){
	$(this).animate({ bottom:'+=2%'},400,function(){
		$(this).animate({ bottom: '-=2%'},400)
	})
});