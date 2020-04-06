var W = 600;
var H = 315;

var front; // Bitmap
var mid; // Shape
var back; // Bitmap

function draw(photo, isGhost) {

    /* Load ghost image instead of dataurl*/
    var frontImg = new Image();
    frontImg.src = 'img/drawGhost.png';
    frontImg.onload = function() {
        front = new createjs.Bitmap(frontImg);
        /* set transforms here */
        setPos(front);
        if (back) drawStage(isGhost);
    };


    /* Use Shape instead of a 2000x2000 Bitmap*/
    mid = new createjs.Shape()
    mid.graphics.beginFill('rgba(0,0,0,.3)');
    mid.graphics.drawRect(0, 0, W, H);


    // Load the given photo.
    var backImg = new Image();
    backImg.src = photo;
    backImg.onload = function() {
        back = new createjs.Bitmap(backImg);
        /* set transforms here */
        setSize(backImg, back);
        if (front) drawStage(isGhost);
    };
}


// Load the photo given.
function drawStage(isGhost) {
    /* front, mid, back all ready */


    /* Create canvas and Initialize its size*/
    var canvas = document.getElementById("canvas");
    canvas.width = W;
    canvas.height = H;

    var stage = new createjs.Stage(canvas);

    /* addChild in order */
    stage.addChild(back);
    stage.addChild(mid);
    stage.addChild(front);

    stage.update()

    if (isGhost === 0) {
        /* Never used? */
        saveDataUrl(canvas, "PHOTO")
    }

    if (isGhost === 1) {
        saveDataUrl(canvas, "NEWPHOTO")

        /* Use visible instead of alpha for performance*/
        mid.visible = false;
        front.visible = false;
        stage.update();
    }
}

function saveDataUrl(canvas, name) {
    var dataURL = canvas.toDataURL();
    localStorage.setItem(name, dataURL);
}

// Crop photo.
function setSize(img, bitmap) {
    var n = Math.max(W / img.width, H / img.height);
    var x = (W - img.width * n) >> 1; /* 密技 (bitwise shift) */
    var y = (H - img.height * n) >> 1;
    bitmap.setTransform(x, y, n, n);
}

// Random position for ghost.
function setPos(bitmap) {
    var ghostX = Math.random() * (W - 300) + 50;
    var ghostY = Math.random() * (H - 200);
    var scale = Math.random() * 0.5 + 0.5;
    var rotation = Math.random() * 20 - 9.5;
    bitmap.setTransform(ghostX, ghostY, scale, scale, rotation);
}
