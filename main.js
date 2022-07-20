let rectArray = [];
let player = {
    x:200,
    y:500,
    w:25,
    h:25,
    up: false,
    down: false,
    left: false,
    right: false,
    upcol: true,
    downcol: true,
    leftcol: true,
    rightcol: true,

}
buildRectArray();
loop();
function loop(){
    Fill("green");
    Rect(0,0,cnv.width,cnv.height, "fill");
    drawRect();
    collide();
    Fill("orange");
    Rect(player.x,player.y,player.w,player.h, "fill");
    moveBy(); 
    requestAnimationFrame(loop);
}
