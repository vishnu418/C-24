const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(890,350,70,70);
    box2 = new Box(700,350,70,70);
    ground = new Ground(600,390,1200,30);
    pig = new Pig(795,350,60,60);
    log1 = new Log(795,310,270,PI/2);
    box3 = new Box(700,380,70,70);
    box4 = new Box(900,380,70,70);
    pig2 = new Pig(795,380,60,60);
    log2 = new Log(795,370,280,PI/2);
    box5 = new Box(795,300,70,70);
    log3 = new Log(730,300,135,PI/7);
    log4 = new Log(830,300,135,-PI/7);
    bird = new Bird(300,300,60,60);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
   pig.display();
   log1.display();
   box3.display();
   box4.display();
   pig2.display();
   log2.display();
   box5.display();
   log3.display();
   log4.display();
   bird.display();
}