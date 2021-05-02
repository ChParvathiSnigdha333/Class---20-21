var fixedRect, movingRect, gameOjt1; 

function setup() { 
  createCanvas(1200,800); 
  
  fixedRect = createSprite(400, 200, 60, 50); 
  fixedRect.shapeColor = "green"; 
  fixedRect.debug = true; 
  
  movingRect = createSprite(200, 200, 160, 60); 
  movingRect.shapeColor = "yellow"; 

  gameOjt1 = createSprite(300, 450, 160, 60); 
gameOjt1.shapeColor = "cyan";
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  
var temp = isTouching(movingRect,gameOjt1);
if(temp)
{
movingRect.shapeColor = "red"; 

}
else{
    movingRect.shapeColor = "yellow"; 
    
}
  drawSprites();
}


  
