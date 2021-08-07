var ball={
  x:20,
  y:30,
  d:40,
  xspeed:0,
yspeed:0,
color:["blue","green","red"],


};


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.d);
  fill(ball.color[1] );
  ball.xspeed=-1;
  ball.x=ball.x+ball.xspeed;
}























