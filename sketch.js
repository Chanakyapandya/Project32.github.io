const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var polygon_img;
var backgroundImg;
var score =0;


function preload() {
    //backgroundImg = loadImage("sprites/bg.png");

    getTime();

    polygon_img = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;



    

    stand = new Ground(420,300,250,20);
    stand2 = new Ground(800,300,250,20);
    plateform = new Ground(600,height,1200,20);
  
    block1 = new Block(310,267,30,40)
    block2 = new Block(340,267,30,40)
    block3 = new Block(370,267,30,40)
    block4 = new Block(400,267,30,40)
    block5 = new Block(430,267,30,40)
    block6 = new Block(460,267,30,40)
    block7 = new Block(490,267,30,40)
    block8 =  new Block(520,267,30,40)


    
    block9 = new Block(340,237,30,40)
    block10 = new Block(370,207,30,40)
    block11= new Block(400,188,30,40)
    block12= new Block(430,200,30,40)
    block13= new Block(460,200,30,40)
    block14= new Block(490,200,30,40)


    block15 = new Block(370,160,30,40)
    block16= new Block(400,160,30,40)
    block17= new Block(430,170,30,40)
    block18= new Block(460,170,30,40)

    block19= new Block(400,120,30,40)
    block20= new Block(430,130,30,40)
   
    block21 = new Block(400,100,30,40)


//b
    b1 = new Block(690,267,30,40)
    b2 = new Block(720,267,30,40)
    b3 = new Block(750,267,30,40)
    b4 = new Block(780,267,30,40)
    b5 = new Block(810,267,30,40)
    b6 = new Block(840,267,30,40)
    b7 = new Block(870,267,30,40)
    b8 =  new Block(900,267,30,40)


    
    b9 = new Block(720,237,30,40)
    b10 = new Block(750,200,30,40)
    b11= new Block(780,200,30,40)
    b12= new Block(810,200,30,40)
    b13= new Block(840,200,30,40)
    b14= new Block(870,200,30,40)


    b15 = new Block(750,180,30,40)
    b16= new Block(780,180,30,40)
    b17= new Block(810,180,30,40)
    b18= new Block(840,180,30,40)

    b19= new Block(780,121,30,40)
    b20= new Block(810,121,30,40)
   
    b21 = new Block(810,100,30,40)


   // polygon = new Polygon(50,200,20);
 
   polygon = Bodies.circle(50,200,20);
   World.add(world,polygon);

   

  
    slingshot = new SlingShot(this.polygon,{x:100, y:200});

    
}

function draw(){
    if(backgroundImg){
        //backgroundImg.scale = 4
    background(backgroundImg);
    }

    Engine.update(engine);
      
textSize(20);
    text("Score:"+score,200,50);
    

    text(mouseX+","+mouseY,mouseX,mouseY);
  //  strokeWeight(4);

  slingshot.display(); 

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40)
   
    stand.display();
    stand2.display();
    plateform.display();

 
   
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
   
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();

   block15.display();
   block16.display();
   block17.display();
   block18.display();
 block19.display();
block20.display();

block21.display();

b1.display();
b2.display();
b3.display();
b4.display();

b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();

b11.display();
b12.display();
b13.display();
b14.display();

b15.display();
b16.display();
b17.display();
b18.display();
b19.display();
b20.display();
  b21.display(); 


  
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
 
 block9.score();
 block10.score();
 block11.score();
 block12.score();
 block13.score();
 block14.score();

 block15.score();
 block16.score();
 block17.score();
 block18.score();
block19.score();
block20.score();

block21.score();

b1.score();
b2.score();
b3.score();
b4.score();

b5.score();
b6.score();
b7.score();
b8.score();
b9.score();
b10.score();

b11.score();
b12.score();
b13.score();
b14.score();

b15.score();
b16.score();
b17.score();
b18.score();
b19.score();
b20.score();
b21.score();

  

 // textSize("3")
text("press space for second chance",50,100);

textSize(30)
text("Drag Mouse and Realease to Shoot polygon",400,50);
 
}
   




function keyPressed(){

if(keyCode === 32){

Matter.Body.setPosition(this.polygon,{x:50,y:200});


slingshot.attach(this.polygon);


}

}
   

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


async function getTime(){

var resp = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var respJson = await resp.json();

var dateTime = respJson.datetime;


var hr = dateTime.slice(11,13);


if(hr>=06 && hr<=12){

bg = "day.jpg";



}

else{

bg = "night.jpg";

}


backgroundImg = loadImage(bg);

}