var speed , weight ;
var car1 , car2 , car3, car4 ;
var wall1 , wall2 ;

function setup() {
  createCanvas(1600 , 400);
  

  speed.random(59 , 90);
  weight.random(1500 , 900);

  car1 = createSprite(50 , 200, 50, 50);
  car2 = createSprite(50 , 250 , 50, 50);

  wall1 = createSprite(1500 , 200, 60 , 50);
  wall1.shapeColor(80, 80, 80);

  wall2 = createSprite(1500 , 280 , 60, 50);
  wall2.shapeColor(80, 80, 80);

  
  

}

function draw() {
  background(0, 0, 0); 
  
  

  drawSprites();
}