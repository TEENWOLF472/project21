var thickness , wall;
var bullet , weight , speed;
var damage;

function setup() {

  createCanvas(1600,400);

 bullet =  createSprite(400, 200, 70, 30);

 wall = createSprite(1200 , 200, thickness, height/2);
 wall.shapeColor = (80,80,80);



}



function draw() {

  background(255,255,255);

  thickness = random(22,83);

  weight = random(30,52);
  speed = random(223,321);
  
  bullet.velocityX = speed;

  if (hasCollided(bullet,wall)){
  bullet.velocityX = 0
  var damage = (0.5 * weight * speed * speed)/thickness * thickness * thickness;
  

  if (damage > 10){
    wall.shapeColor = ("red");
  }

 if (damage < 10){
   bullet.shapeColor = ("green");
 }
  }

  drawSprites();

  function hasCollided(lbullet,lwall){

bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;
if (bulletRightEdge >= wallLeftEdge){
  return true;
}
  return false;
  }
}