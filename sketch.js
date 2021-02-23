var canvas;
var music;
var rect1,rect2,rect3,rect4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
    music.play();
    //create 4 different surfaces
     rect1=createSprite(102,587,180,20);
     rect1.shapeColor="red";
     rect2=createSprite(310,587,190,20);
     rect2.shapeColor="blue";
     rect3=createSprite(510,587,170,20);
     rect3.shapeColor="yellow";
     rect4=createSprite(690,587,150,20);
     rect4.shapeColor="green";

    //create box sprite and give velocity
    box=createSprite(random(20,750),210,30,30);
    box.velocityY=4;
    box.velocityX=4;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   edges=createEdgeSprites();
   box.bounceOff(edges); 
    if(rect1.isTouching(box)&&box.bounceOff(rect1)){
        box.shapeColor="red";
    }
   
    if(rect2.isTouching(box)&&box.bounceOff(rect2)){
        box.shapeColor="blue";
        box.velocityY=0;
        box.velocityX=0;
    }

    if(rect3.isTouching(box)&&box.bounceOff(rect3)){
        box.shapeColor="yellow";
    }
   
    if(rect4.isTouching(box)&&box.bounceOff(rect4)){
        box.shapeColor="green";
    }
    drawSprites();
}