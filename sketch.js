var boy,tree,mango1,mango2,mango3,stone
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800,700)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
boy = new Boy(100,300,10,20)
tree = new Tree(300,300,20,20)
stone = new Stone(110,300,10,100)
ground = new Ground(400,690,400,20)
mango1 = new Mango(300,310,20)
slingShot= new Slingshot(stone.body,{x:200,y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  boy.display();
  stone.display();
  tree.display();
  mango1.display();
  detectCollision(stone.mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly()
}
function detectCollision(stone,mango){
mangoBodyPosition= mango.body.position
stoneBodyPosition= stone.body.position
var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.r+stone.r){
	Matter.Body,setStatic(mango.body,false)
}
}