function flash(c) {
    if (c.class == 'flash') {
        $('#noisemusic')[0].play();
        $('body').css('background-image', 'url("img/bg.gif")');
    } else {
        $('#noisemusic')[0].pause();
        $('body').css('background-image', 'none');
    }
}

function flashMore() {
    $('#noisemusic')[0].play();
    $('body').css('background-image', 'url("img/bg.gif")');
    setTimeout(flashStop, 500);

}

function flashStop() {
    $('#noisemusic')[0].pause();
    $('body').css('background-image', 'none');
    setTimeout(flashControl, 2000);
}

function flashControl() {
    p = Math.floor(Math.random() * 9) * 1000;
    setTimeout(flashMore, p);
}
var p = 2000;
setTimeout(flashMore, p);

function beHere() {
    $('<audio id="behere"><source src="music/beHere.mp3" type="audio/mpeg"></audio>').appendTo('body');
    $('<audio id="noisemusic"><source src="music/noise.mp3" type="audio/mpeg"></audio>').appendTo('body');
}

beHere();