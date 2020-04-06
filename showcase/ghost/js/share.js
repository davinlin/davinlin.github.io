// Title Animation.
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
            $("#head").text("幽魂聊天室...已");
            n = 5;
            break;
        case 5:
            $("#head").text("幽魂聊天室...已離");
            n = 6;
            break;
        case 6:
            $("#head").text("幽魂聊天室...已離線");
            n = 0;
            break;
        default:
            $("#head").text("幽魂聊天室");
            n = 1;
            break;
    }
    if (n!= 0)
        setTimeout(title,600);
}
title();

// Scream out loud. (in sound.js)
scream();

// Show death photo.
var newphoto = localStorage.getItem("NEWPHOTO");
$("#deathPhoto").attr("src",newphoto);

// Get share url. (via medialand)
var shareurl;
$.post(
    "http://lab.medialand.com.tw/goodbros/saveimg",
    {img: newphoto},
    function(response){
        shareurl = response;
        $("#share").show();
    }
);

//Share on Facebook.
var name;
var way;

function f1(){
    var dfd = $.Deferred();
    setTimeout(function () {
        name = localStorage.getItem("name");
        way = localStorage.getItem("way");
        dfd.resolve();
    }, 500);
    return dfd.promise;
}

function f2(){
    $("#shareBtn").click(function(){                    
    var url = "https://www.facebook.com/dialog/share"+ 
        "?app_id=1742941345981148"+
        "&display=popup"+
        "&mobile_iframe=true"+
        "&href="+encodeURIComponent(shareurl)+
        "&redirect_uri="+"http://lab.medialand.com.tw/ghost/share.html"+
        "&title="+name+" 前世的死亡方式是「"+way+"」？！"+
        "&description=【 幽魂聊天室 】想知道你前世死法，就來跟鬼聊天吧！";
        location.href = url;
    });
}

f1();
f2();

