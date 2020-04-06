function scream() {
    $('<audio id="yell"><source src="music/ghost-yell.wav" type="audio/wav"></audio>').appendTo('body');
    $('#yell')[0].play();
}
