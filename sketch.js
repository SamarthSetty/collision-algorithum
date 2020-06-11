var fixedRect , movingRect;





function setup() {
  createCanvas(800,400);
fixedRect = createSprite(400, 200, 50, 100);
movingRect = createSprite(200,200,100,50);
fixedRect.shapeColor = "white";
fixedRect.debug=true;
movingRect.shapeColor = "blue";
movingRect.debug=true;

}

function draw() {
  background(0);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2 && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ){
    movingRect.shapeColor="purple";
    fixedRect.shapeColor="red";
  }
  else {
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="white";
  }
  drawSprites();
}