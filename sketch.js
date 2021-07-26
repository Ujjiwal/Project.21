const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(100,600,10);
	ground = new Ground(400,680,800,20);
	leftSide = new Ground(580,605,20,100);
	rightSide = new Ground(720,605,20,100);
	groundObj = new Ground(width/2,670,width,20);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

 groundObj.display();
 ball.display();
 leftSide.display();
 rightSide.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15})
	}
}