const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

function preload(){

StrikerImage=loadImage("polygon.png")  // the image of the striker isnt getting displayed
}

function setup() {
    createCanvas(1000,500)
    engine=Engine.create()
    world=engine.world

    //down

    //level1
 
    df1=new Box(540,250,30,20)
    df2=new Box(570,250,30,20)
    df3=new Box(600,250,30,20)
    df4=new Box(630,250,30,20)         //  gd= new Ground(600,300,160,20)
    df5=new Box(660,250,30,20)

     //lvl 2

    ds1=new Box(570,240,30,20)
    ds2=new Box(600,240,30,20)
    ds3=new Box(630,240,30,20)

    //lvl 3

    dt1=new Box(600,230,30,20)

    //up
    //lvl 1
    uf1=new Box(540,100,30,20)
    uf2=new Box(570,100,30,20)
    uf3=new Box(600,100,30,20)
    uf4=new Box(630,100,30,20)
    uf5=new Box(660,100,30,20)

    //lvl 2
    us1=new Box(570,90,30,20)
    us2=new Box(600,90,30,20)
    us3=new Box(630,90,30,20)
    
    //lvl 3
    ut1=new Box(600,80,30,20)

     //ground
    ground= new Ground(500,450,1000,20)
    gd= new Ground(600,300,160,20)
    gu= new Ground(600,130,160,10)

    //striker
    striker=Bodies.circle(300,200,20)
    World.add(world,striker)

    //sling
    slingshot=new Launcher(this.striker,{x:200,y:200})

}
function draw(){
      background("black")
      Engine.update(engine);
    fill("lightblue")
    df1.display()
    df2.display()
    df3.display()
    df4.display()
    df5.display()
 
     fill("lightgreen")
    ds1.display()
    ds2.display()
    ds3.display()

    fill("white")  
    dt1.display()

    fill("lightgreen")
    uf1.display()
    uf2.display()
    uf3.display()
    uf4.display()
    uf5.display()

    fill("lightblue")
    us1.display()
    us2.display()
    us3.display()

    fill("white")
    ut1.display()
   
    fill("brown")
    ground.display()
    gd.display()
    gu.display()
 
    ellipseMode(RADIUS)
    fill("grey")
    ellipse(striker.position.x,striker.position.y,20,20)

   

    

    slingshot.display()

}
function mouseDragged(){
    Matter.Body.setPosition(striker, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();  //fly is in slingshot class
}

function keyPressed(){
if(keyCode===32){
   slingshot.attach(striker) //attach function inside slingshot class

}
   



}
