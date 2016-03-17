/**
 * Created by Abraham-PC on 14/03/2016.
 */
if ( !window.requestAnimationFrame ) {
    window.requestAnimationFrame = ( function() {

        return window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {

                window.setTimeout( callback, 1000 / 60 );

            };

    } )();
}

var canvas = document.getElementById('scene');
var ctx = canvas.getContext('2d');
var w = canvas.width;
var h = canvas.height;

var circle = function(color, r) {
    ctx.fillStyle = color;

    ctx.beginPath();
    ctx.arc(0, 0, r, 0, 2 * Math.PI, true);
    ctx.closePath();

    ctx.fill();
}

var i = 0;
var redraw = function() {
    ctx.save();

    // paint bg
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, w, h);

    // set origin to center
    ctx.translate(w / 2, h / 2);

    // draw sun
    circle('yellow', 20);

    // rotate + move along x
    ctx.rotate(i / 100);
    ctx.translate(100, 0);

    // draw planet
    circle('green', 10);

    ctx.restore();

    i++;

    window.requestAnimationFrame(redraw);
};

window.requestAnimationFrame(redraw);
