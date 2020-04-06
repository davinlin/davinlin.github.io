var windowSize;

$(document).ready(function() {
    if ($(window).width() < 420)
        windowSize = 'xs';
    else if ($(window).width() < 700)
        windowSize = 's';
    else if ($(window).width() < 950)
        windowSize = 'm';
    else if ($(window).width() < 1200)
        windowSize = 'l';
    else
        windowSize = 'xl';
    setButton();
});

function setButton(){
    switch(windowSize){
        case 'xs':
            $("#bar1").attr("src", "img/bar_xs.png");
            $("#btnSend").attr("src", "img/btnSend_xs.png");
            $("#bar2").attr("src", "img/bar_xs.png");
            $("#btnUpload").attr("src", "img/btnUpload_xs.png");
            break;
        case 's':
            $("#bar1").attr("src", "img/bar_s.png");
            $("#btnSend").attr("src", "img/btnSend_s.png");
            $("#bar2").attr("src", "img/bar_s.png");
            $("#btnUpload").attr("src", "img/btnUpload_s.png");
            break;
        case 'm':
            $("#bar1").attr("src", "img/bar_m.png");
            $("#btnSend").attr("src", "img/btnSend_m.png");
            $("#bar2").attr("src", "img/bar_m.png");
            $("#btnUpload").attr("src", "img/btnUpload_m.png");
            break;
        case 'l':
            $("#bar1").attr("src", "img/bar_l.png");
            $("#btnSend").attr("src", "img/btnSend_l.png");
            $("#bar2").attr("src", "img/bar_l.png");
            $("#btnUpload").attr("src", "img/btnUpload_l.png");
            break;
        case 'xl':
            $("#bar1").attr("src", "img/bar_xl.png");
            $("#btnSend").attr("src", "img/btnSend_xl.png");
            $("#bar2").attr("src", "img/bar_xl.png");
            $("#btnUpload").attr("src", "img/btnUpload_xl.png");
            break;
    }
}

function sendPress(){
    switch(windowSize){
        case 'xs':
            $("#btnSend").attr("src", "img/btnSend_xs_p.png");
            break;
        case 's':
            $("#btnSend").attr("src", "img/btnSend_s_p.png");
            break;
        case 'm':
            $("#btnSend").attr("src", "img/btnSend_m_p.png");
            break;
        case 'l':
            $("#btnSend").attr("src", "img/btnSend_l_p.png");
            break;
        case 'xl':
            $("#btnSend").attr("src", "img/btnSend_xl_p.png");
            break;
    }
}

function sendRelease(){
    switch(windowSize){
        case 'xs':
            $("#btnSend").attr("src", "img/btnSend_xs.png");
            break;
        case 's':
            $("#btnSend").attr("src", "img/btnSend_s.png");
            break;
        case 'm':
            $("#btnSend").attr("src", "img/btnSend_m.png");
            break;
        case 'l':
            $("#btnSend").attr("src", "img/btnSend_l.png");
            break;
        case 'xl':
            $("#btnSend").attr("src", "img/btnSend_xl.png");
            break;
    }
}

function uploadPress(){
    switch(windowSize){
        case 'xs':
            $("#btnUpload").attr("src", "img/btnUpload_xs_p.png");
            break;
        case 's':
            $("#btnUpload").attr("src", "img/btnUpload_s_p.png");
            break;
        case 'm':
            $("#btnUpload").attr("src", "img/btnUpload_m_p.png");
            break;
        case 'l':
            $("#btnSend").attr("src", "img/btnUpload_l_p.png");
            break;
        case 'xl':
            $("#btnSend").attr("src", "img/btnUpload_xl_p.png");
            break;
    }
}

function uploadRelease(){
    switch(windowSize){
        case 'xs':
            $("#btnUpload").attr("src", "img/btnUpload_xs.png");
            break;
        case 's':
            $("#btnUpload").attr("src", "img/btnUpload_s.png");
            break;
        case 'm':
            $("#btnUpload").attr("src", "img/btnUpload_m.png");
            break;
        case 'l':
            $("#btnUpload").attr("src", "img/btnUpload_l.png");
            break;
        case 'xl':
            $("#btnUpload").attr("src", "img/btnUpload_xl.png");
            break;
    }
}