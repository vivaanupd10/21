
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
	var rightGround; 
 	var leftGround; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options={
		restitution:1
	  }
	

	
	  ball=Bodies.circle(200,200,30,options);
	  World.add(world,ball);
	  
	  rightGround = new Ground(300,300,20,100);
 	 leftGround = new Ground(400,300,20,100);
	  rectMode(CENTER);
	  ellipseMode(RADIUS);

	Engine.run(engine);

	button=createImg("right.png")
	button.position(220,30);
	button.size(50,50)
	button.mouseClicked(hForce);
  
}

function hForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:.05,y:0})
	
	
	}

function draw() {

  background(51);
  leftGround.show();
  rightGround.show();
  Engine.update(engine);

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,30);

  
  drawSprites();
 
}



