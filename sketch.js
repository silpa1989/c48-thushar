var bg,bgimg;
var zb1,zb1img;
var zb2;
var zb3;
var zb4;
var bar1,bar2,bar3,bar4,bar5,bar5img;
var shooter,shooterimg;
var wood1,woodimg,wood2;
var box1,boximg;
var gunsound;
var zbsound;

function preload(){
bgimg = loadImage("bg4.png");
zb1img =loadImage("Zombie-Transparent.png");
//zbfall =loadImage("Zombiefall.png");
shooterimg = loadImage("shooter.png");
woodimg = loadImage("slantwood.png");
zb2img = loadImage("Zombie-Transparent.png");
bar5img = loadImage("bar5.png");
boximg = loadImage("box1.png");
bulletimg = loadImage("bullet.jpg");
gunsound = loadSound("gun.mp3");
zbsound = loadSound("zbsound1.mp3");
}
var score=0;
function setup(){
createCanvas(800,600);
bg = createSprite(300,300);
bg.addImage("bg1",bgimg);
bg.scale = 0.7;	

zb1 = createSprite(680,500);
zb1.addImage("zombie",zb2img);

zb1.scale = 0.2;

zb2 = createSprite(600,500);
zb2.addImage("zombie",zb2img);
zb2.scale = 0.2;

zb3 = createSprite(680,100);
zb3.addImage("zombie",zb2img);
zb3.scale = 0.2;

zb4 = createSprite(600,100);
zb4.addImage("zombie",zb2img);
zb4.scale = 0.2;

bar1 = createSprite(50,5,1800,20);
bar1.shapeColor = "black";
bar2 = createSprite(50,595,1800,20);
bar2.shapeColor = "black";
bar3 = createSprite(0,5,20,1800);
bar3.shapeColor = "black";
bar4 = createSprite(795,5,20,1800);
bar4.shapeColor = "black";
bar5 = createSprite(490,480);
bar5.addImage("rod",bar5img)
bar6 = createSprite(200,100);
bar6.addImage("rod",bar5img)
wood1 = createSprite(630,570);
wood1.addImage("plank",woodimg);
wood1.scale = 0.2;

wood2 = createSprite(630,150);
wood2.addImage("plank",woodimg);
wood2.scale = 0.2;



shooter = createSprite(110,470);
shooter.addImage("man",shooterimg);
shooter.scale = 0.1;

//bar6 = createSprite(600,350,10,70);

bullet= createSprite(150,400,10,10);
bullet.addImage("ok",bulletimg)
bullet.scale = 0.1;
//bar5.setCollider("circle",10,10,40)
//bullet.setCollider("circle",0,0,40)
//bullet.setCollider("circle",0,0,40)
//bullet.setCollider("circle",0,0,40)

}

function draw(){
   
background(0);



//bullet.visible=false;
if(keyDown("space"))
{
   
    bullet.velocityX=20;
    //bullet.velocityY=-9;
    gunsound.play();
}
if(bullet.isTouching(bar5))
{
    bullet.velocityX=20;
    bullet.velocityY=-17.5;
}
if(bullet.isTouching(zb1)  )
{
   
    zb1.remove();
    score=score+10;
}
if(bullet.isTouching(zb2)  )
{
   
    zb2.remove();
    score=score+10;
}
if(bullet.isTouching(zb3)  )
{
   
    zb3.remove();
    score=score+10;
}
if(bullet.isTouching(zb4)  )
{
    zb4.remove();
    score=score+10;
    zbsound.play();
}
 
/*if(keyWentDown("Up_Arrow" ))
{
    shooter.y=shooter.y-50;
}
if(keyWentUp("Up_Arrow" ))
{
    shooter.y=shooter.y+50;
}*/
/*if(bullet.isTouching(box1))
{
   
    zb1.visible=false;
    zb2.visible=false;
    
}*/
bullet.bounceOff(bar1);
bullet.bounceOff(bar2);
bullet.bounceOff(bar3);
bullet.bounceOff(bar4);
bullet.bounceOff(bar5);
bullet.bounceOff(bar6);
bullet.bounceOff(wood1);
bullet.bounceOff(wood2);

drawSprites();
fill ("white")
textSize(35)
text("SCORE   : "+ score,0,50 )
if(score===40)
 {
    fill("red");
    text("YOU WON THE GAME ",200,200 )
   
 }
}