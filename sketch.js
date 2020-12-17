var car, wall;
var speed, weight;
var stop;
var deformation;

function setup() {
  createCanvas(1600,400);
  
  car=createSprite(0, 200, 25, 25);
  car.shapeColor='blue';
  speed=random(55, 90);
  car.velocityX = speed;
  weight=random(480, 1500);

  wall=createSprite(1000, 200, 20, 200);
  wall.shapeColor='white';

  stop=createSprite(1300, 200, 5, 400);
  stop.shapeColor='gold';
  stop.visible=false;
}

function draw() {
  background(0, 0, 0);
  car.collide(stop);
  deformation = (0.5*weight*speed*speed)/22500
  if (wall.x-car.x < (car.width+wall.width)/2){
    if (deformation>180){
      car.shapeColor=color(230, 230, 0);
    } 
    if (deformation<180 && deformation>100){
      car.shapeColor=color(255, 0, 0);
    } 
    if (deformation<100){
      car.shapeColor=color(0, 223, 0);
    }
  } 
  
  drawSprites();
}