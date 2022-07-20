function buildRectArray(){
    for(i=0;i<3;i++){
        rectArray.push(rectForm());
    }
}
function drawRect(){
    Fill("grey");
    for (i=0;i<rectArray.length;i++){
        Rect(rectArray[i].x,rectArray[i].y,rectArray[i].w,rectArray[i].h, "fill");
        rectArray[i].y+=rectArray[i].sped;
        if (rectArray[i].y >= cnv.height){
            rectArray[i]=rectForm();
        }
    }
    
}
function rectForm(){
   return {x:RandNum(cnv.width)-50,y:0,w:RandNum(25)+100,h:RandNum(5)+20,sped:RandNum(5)+1}
}
function keydownhandler(event){
    if (event.code === "KeyW"){
        player.up = true;
    } if (event.code === "KeyS"){
        player.down = true;
    } if (event.code === "KeyA"){
        player.left = true;
    } if (event.code === "KeyD"){
        player.right = true;
    }
}
function keyuphandler(event){
    if (event.code === "KeyW"){
        player.up = false;
    } if (event.code === "KeyS"){
        player.down = false;
    } if (event.code === "KeyA"){
        player.left = false;
    } if (event.code === "KeyD"){
        player.right = false;
    }
}
function moveBy(){
    if (player.up && player.y!=0){
        player.y +=-5;
    } if (player.down && player.y+player.h!=cnv.height){
        player.y +=5;
    }if (player.left && player.x!=0){
        player.x +=-5;
    }if (player.right && player.x+player.w!=cnv.width){
        player.x +=5;
    }
}
function collide(){
    for (i=0;i<rectArray.length;i++){
        if (rectCollide(player,rectArray[i])){
            player.y=rectArray[i].y+rectArray[i].h-rectArray[i].sped;
        }
    }
    if (player.y+player.h>=cnv.height){
        player.y = cnv.height-player.h;
    }
}