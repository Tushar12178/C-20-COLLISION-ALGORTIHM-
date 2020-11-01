 var t,s

function setup() {
  createCanvas(800,400);
 
   t = createSprite(600,400,50,80)
   s = createSprite(400,200,80,30)
  t.shapeColor="green "
  s.shapeColor="green"
  

}

function draw() {

  background(255,255,255);
  s.y=mouseY  
  s.x=mouseX
  if(s.x-t.x<t.width/2+s.width/2&&
    t.x-s.x<t.width/2+s.width/2&&
    s.y-t.y<t.height/2+s.height/2&&
      t.y-s.y<t.height/2+s.height/2){
      t.shapeColor="red"
      s.shapeColor="red"
    }
    else{
      t.shapeColor="green"
      s.shapeColor="green"
    }

  drawSprites();
}