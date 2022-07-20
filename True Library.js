// GAME LIBRARY

// Global Variables
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");

let mouseX;
let mouseY;
let mouseIsPressed = false;
let keyPressed = {};

// Canvas Default Size
cnv.width = 400;
cnv.height = 600;

// Set the canvas to the provided size
function canvasSize(width, height) {
  cnv.width = width;
  cnv.height = height;
}

// Determine the distance between two points
function dist(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

// Test if point is in circle
function ptInCircle(x, y, aCircle) {
  return dist(x, y, aCircle.x, aCircle.y) < aCircle.r;
}

// Test if point is in rectangle
function ptInRectangle(x, y, aRect) {
  return (x > aRect.x && x < aRect.x + aRect.w && y > aRect.y && y < aRect.y + aRect.h);
}

// Test if two circle objects intersect
function circleCollide(circle1, circle2) {
  return dist(circle1.x, circle1.y, circle2.x, circle2.y) < (circle1.r + circle2.r);
}

// Test if two rectangle objects intersect
function rectCollide(rect1, rect2) {
  let le1 = rect1.x;
  let re1 = rect1.x + rect1.w;
  let te1 = rect1.y;
  let be1 = rect1.y + rect1.h;
  let le2 = rect2.x;
  let re2 = rect2.x + rect2.w;
  let te2 = rect2.y;
  let be2 = rect2.y + rect2.h;
  return le1 < re2 && re1 > le2 && be1 > te2 && te1 < be2;
}

// Event Listeners & Handlers
document.addEventListener("mousedown", () => mouseIsPressed = true);
document.addEventListener("mouseup", () => mouseIsPressed = false);
document.addEventListener("mousemove", mousemoveHandlerLib);
document.addEventListener("keydown", keydownhandler);//(e) => keyPressed[e.code] = true);
document.addEventListener("keyup", keyuphandler);//(e) => keyPressed[e.code] = false);

function mousemoveHandlerLib(event) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(event.clientX - cnvRect.left);
  mouseY = Math.round(event.clientY - cnvRect.top);
}
function Line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1); 
  ctx.lineTo(x2, y2);
  ctx.stroke(); 
}
function Rect(x, y, w, h, mode) {
  if (mode === "stroke") {
      ctx.strokeRect(x, y, w, h);
  } else if (mode === "clear") {
      ctx.clearRect(x, y, w, h);
  } else {
      ctx.fillRect(x, y, w, h);
  }
}
function circle(x, y, r, mode) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);   
  if (mode === "stroke") {
      ctx.stroke();
  } else {
      ctx.fill();
  }
}
function triangle(x1, y1, x2, y2, x3, y3, mode) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.lineTo(x1, y1);
  if (mode === "stroke") {
      ctx.stroke();
  } else {
      ctx.fill();
  }
}
function text(message, x, y, mode) {
  if (mode === "stroke") {
      ctx.strokeText(message, x, y);
  } else {
      ctx.fillText(message, x, y);
  }
}
function ellipse(x, y, xRad, yRad, Rotation, mode) {
  ctx.beginPath();
  ctx.ellipse(x, y, xRad, yRad, Rotation, 0, 2 * Math.PI);
  if (mode === "stroke") {
      ctx.stroke();
  } else {
      ctx.fill();
  }
}
function image(imgUrl,x,y,w,h) {
  ctx.drawImage(imgUrl,x,y,w,h);
}
function imageClip(imgUrl,xc,yc,wc,hc,x,y,w,h) {
  ctx.drawImage(imgUrl,xc,yc,wc,hc,x,y,w,h);
}
function Fill(style) {
  ctx.fillStyle = style;
}
function Stroke(style) {
  ctx.strokeStyle = style;
}
function Font(fontype) {
  ctx.font = fontype;
}
function RandNum(num){
  return Math.random()*num
}