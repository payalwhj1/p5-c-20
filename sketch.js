var fr,mr;


function setup() {
  createCanvas(800,400);
  fr = createSprite(200, 200, 50, 80);
  mr = createSprite(400,200,80,30);
  fr.shapeColor = "green";
  mr.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  mr.x = World.mouseX;
  mr.y = World.mouseY;
if (mr.x - fr.x < fr.width/2+mr.width/2){
  fr.shapeColor = "red";
  mr.shapeColor = "red";
}else{
  fr.shapeColor = "green";
  mr.shapeColor = "green";
}
  drawSprites();
}