const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3,boggie4,boggie5,boggie6;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  boggie1 = new Boggie(50,170,50,50);
  boggie2 = new Boggie(50,220,50,50);
  boggie3 = new Boggie(50,270,50,50);
  boggie4 = new Boggie(50,320,50,50)
  boggie5 = new Boggie(50,370,50,50);
  boggie6 = new Boggie(50,420,50,50);

}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  boggie1.display();
  boggie2.display();
  boggie3.display();
  boggie4.display();
  boggie5.display();
  boggie6.display();

  }

  
