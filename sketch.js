var boy,car1,car2,car3,car4;
var obstacles,cars;
var obstacle1,obstacle2,obstacle3,obstacle4;
var ground,groundImage;
var obstacle1Image,obstacle2Image,obstacle3Image,obstacle4Image;

function preload() {
groundImage = loadImage("images/track.jpg")
obstacle1Image = loadImage("images/car1.png")
obstacle2Image = loadImage("images/car2.png")
obstacle3Image = loadImage("images/car3.png")
obstacle4Image = loadImage("images/car4.png")
}
function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
 boy=createSprite(400, 200, 50, 50);
 obstacle1=createSprite(400, 200, 50, 50);

 obstacle2=createSprite(400, 200, 50, 50);
 obstacle3=createSprite(400, 200, 50, 50);
 obstacle4=createSprite(400, 200, 50, 50);
 

  ground = createSprite(200,680,400,20);
  ground.addImage("ground",groundImage);
  //ground.x = ground.width /2;
  
}

function draw() {
  background(255,255,255);  

 spawnObstacles();
  drawSprites();

}


function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(1500,585,10,40);
    //obstacle.debug = true;
    //obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      default: break;
    }
  }
}
