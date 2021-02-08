
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;
var object;
var ground;
function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
engine=Engine.create ();
world=engine.world;


var option={
  isStatic:true
}

ground=Bodies.rectangle(200,390,200,20,option);
World.add(world,ground);

var objectOption={
  restitution:1.0
}



object=Bodies.circle(200,100,20,objectOption);
World.add(world,object);


}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);  
  rect(ground.position.x,ground.position.y,200,20);
  ellipseMode(RADIUS)
  ellipse (object.position.x,object.position.y,20,20);
  drawSprites();
}