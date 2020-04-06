var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
	
	//瀏覽器偵測
	var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
    (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
    (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
    (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
    
    var fb = ua.match(/\[fb/);
    if(fb != null){
        $('#error').css('display','block');
        $('#background').remove();
    }else if(fb == null){
    }
    $('<p>'+ua+'</p>').appendTo($('body'));





    function checkResult() {
      var a = frames[0].document.getElementById('test');
      if (!a) return;

      var color;
      if (a.currentStyle) {
        color = a.currentStyle.color;
      } else {
        color = frames[0].getComputedStyle(a, '').color;
      }

      var visited = (color == 'rgb(51, 102, 160)' || color == '#3366a0');
      alert('mode is ' + (visited ? 'NOT Private' : 'Private'));
    }

    function setUniqueSource(frame) {
      frame.src = "test.html?" + Math.random();
      frame.onload = '';
    }