// Initialization and settings.		
// (c for 'conversation')
var c;								
var input;
var fadeTime = 	1500;
var name;
var friend;
$('.typeBar').hide();
$('.photoBar').hide();

// Ghost sends message.
function ghostSend(act){
	pre_process(c.id);
	$('<p id="'+c.id+'g"><span>'+ c.cont +'</span></p>').appendTo($("#conversation")).hide();
	$('#'+c.id+'g').fadeIn(fadeTime);
	$('#conversation').animate({scrollTop:10000});
	if (act == 'ask')
		showBar(c.ans);
	if (act == 'murmur')
		setTimeout("dialog()",fadeTime);
	if (act == 'last') {  
        // 倒數跳頁
		setTimeout('location.href = "share.html"', 3000);
    }
}

// Show bottom bar.
function showBar(answer){
	if (answer == 'word') {
        $('<input class="typeBar" type="text" id="textInput">').appendTo($('#bottom'));
        $('#textInput').hide();
		setTimeout("$('.typeBar').fadeIn(1000)",fadeTime);
        $('#textInput').attr('placeholder',c.hint);
	}
	if (answer == 'photo') {
		setTimeout("$('.photoBar').fadeIn(1000)",fadeTime);
		$('#photoHint').attr("placeholder",c.hint);
	}
}

// User sends message.
function userSend(){
	// press effect, get input text & check valid
	sendPress();
    input = $('#textInput').val();
	process(c.id,input);
	if (!input) {
		setTimeout("sendRelease()",130);
        return ;
	}
	// print on conversation area
	$('<p class="input" id="'+c.id+'"><span>'+input+'</span></p>').appendTo($("#conversation")).hide();
	$('#'+c.id).fadeIn(fadeTime);
	$('#conversation').animate({scrollTop:10000});
	// recover & continue
	setTimeout("sendRelease()",130);
	setTimeout("$('.typeBar').fadeOut()",300);
    $('#textInput').remove();
	setTimeout("dialog()",fadeTime);
}
// (Enter key)
$(document.body).keypress(function(event){
    if (event.which == 13 && c.ans != 'photo')
        userSend();
})

// User upload photo.
function userUpload(photo){
	// draw photo & print on conversation area
	selectFileImage(photo);
	$('<canvas id="canvas" width="0" height="0"></canvas>').appendTo($("#conversation")).hide();
    $('canvas').fadeIn(fadeTime);
	// recover & continue
    setTimeout("uploadRelease()",130);
	setTimeout("$('.photoBar').fadeOut()",300);
    setTimeout("$('.photoBar').css('display','none')",400);
	$('#photoHint').val('');
	setTimeout("dialog()",fadeTime);

}
// (Upload button)
function uploadClicked(){
	// press effect
    uploadPress();
    setTimeout("$('#photoInput').click()",100);
	$("#photoInput").val('').change(function(){
		userUpload(this);
	});
}

// All of conversation.
var conversation = [
{
    act: 'ask',
    cont: '你是誰？',
    ans: 'word',
    hint: '輸入你的名字',
    id: 'name'
},
{
    act: 'ask',
    cont: '你猜猜看我死了幾年？',
    ans: 'word',
    hint: '輸入數字（以年為單位）',
    id: 'year'
},
{
    act: 'murmur',
    cont: '很驚訝吧',
    id:'surprise'
},
{
    act: 'ask',
    cont: '那，你還想知道我什麼？',
    ans: 'word',
    hint: '輸入「死法」或「性別」',
    id: 'info'
}, 
{
    act: 'ask',
    cont: '你不怕嗎，怎麼會想跟我聊天？',
    ans: 'word',
    hint: '',
    id: 'why_chat'
},
{
    act: 'murmur',
    cont: '原來如此',
    id:'gotit'
},
{
    act: 'ask',
    cont: '你也有好朋友嗎...他叫什麼名字？',
    ans: 'word',
    hint: '輸入朋友姓名',
    id: 'friend'
},
{
    act: 'ask',
    cont: '怎麼認識的？',
    ans: 'word',
    hint: '',
    id: 'how_know'
}, 
{
    act: 'ask',
    cont: '你們常一起出去嗎？',
    ans: 'word',
    hint: '輸入「常常」或「不常」',
    id: 'go_out'
},
{
    act: 'ask',
    cont: '所以你們都去哪裡玩？',
    ans: 'word',
    hint: '輸入出遊地點',
    id: 'out_place'
}, 
{
    act: 'murmur',
    cont: '真好，我下次也想跟你們去',
    id:'together'
},
{
    act: 'murmur',
    cont: '當一個透明電燈泡',
    id:'light'
},
{
    act: 'ask',
    cont: '他一定是個很好的朋友，對嗎？',
    ans: 'word',
    hint: '',
    id: 'good_friend'
},
{
    act: 'ask',
    cont: '那，你們多久沒見面了？',
    ans: 'word',
    hint: '',
    id: 'long_see'
},
{
    act: 'murmur',
    cont: '我死了以後好寂寞',
    id:'lonely'
},
{
    act: 'murmur',
    cont: '以前認識的人都消失了',
    id:'gone'
},
{
    act: 'murmur',
    cont: '真的要珍惜活著的時候......',
    id:'cherish'
}, 
{
    act: 'murmur',
    cont: '不然死了以後都沒人緣（菸～',
    id:'no_friend'
}, 
{
    act: 'ask',
    cont: '你說是吧？',
    ans: 'word',
    hint: '',
    id: 'agree'
},
{
    act: 'murmur',
    cont: '我發現，你跟他上輩子也認識',
    id:'last_life'
}, 
{
    act: 'murmur',
    cont: '當時你死去的時候，他一直很難過...',
    id: 'friend_sad'
}, 
{
    act: 'ask',
    cont: '你要不要知道你是怎麼死的？',
    ans: 'word',
    hint: '',
    id: 'know_death'
},
{
    act: 'murmur',
    cont: '讓我看看你的臉',
    id:'see_face'
}, 
{
    act: 'ask',
    cont: '這樣我就能知道，你前世是怎麼死的',
    ans: 'photo',
    hint: '請上傳「橫幅照片」',
    id: 'upload_photo'
},
{
    act: 'murmur',
    cont: '呵呵...我看到了',
    id:'i_see'
}, 
{
    act: 'murmur',
    cont: '上輩子的你好悽慘呀',
    id:'so_bad'
}, 
{
    act: 'murmur',
    cont: '那..我就要到你的耳邊...',
    id:'goto_you'
}, 
{
    act: 'last',
    cont: '慢慢的...告訴你囉...',
    id: 'slowly'
}];


// Start dialog.
function dialog() {
	c = conversation.shift();
	ghostSend(c.act);
}
dialog();

var n = -1;
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
            $("#head").text("幽魂聊天室...上");
            n = 5;
            break;
        case 5:
            $("#head").text("幽魂聊天室...上線");
            n = 6;
            break;
        case 6:
            $("#head").text("幽魂聊天室...上線中");
            n = 0;
            break;
        default:
            $("#head").text("幽魂聊天室");
            n = 1;
            break;
    }
    setTimeout(title,600);
}

function clearData(){
    localStorage.setItem('name', '無名氏');
    localStorage.setItem('way', '未知');
    localStorage.setItem('content', '還不知道你怎麼死的...');
}
clearData();  
title();

/***************************   勿亂動 **************************************/
/**對話內容高度**/ 
var height = $(window).height() - 55;
$('#conversation').css('height',height);

/**日期顯示**/ 
var date = new Date();
var day_list = ['日', '一', '二', '三', '四', '五', '六'];
$('<p id="date"><span id="datepart">'+(date.getMonth()+1)+'/'+date.getDate()+' ('+day_list[date.getDay()]+')'+'</span></p>').prependTo($('#conversation'));




