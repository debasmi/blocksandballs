
var mouse,cat,mouse1Img,cat1Img,mouse2Img,cat2Img;
var bg,bgImg;


function preload() {
    //load the images here
    cat1Img=loadAnimation("images/cat1.png");
    mouse1Img=loadAnimation("images/mouse1.png");
    bgImg=loadImage("images/garden.png");
    cat2Img=loadAnimation("images/cat2.png","images/cat3.png");
    mouse2Img=loadAnimation("images/mouse2.png","images/mouse3.png");
    cat3Img=loadAnimation("images/cat4.png");
    mouse3Img=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    cat=createSprite(800,600,30,30);
    cat.addAnimation("cat",cat1Img);
    cat.scale=0.2;

    mouse=createSprite(200,600,50,60);
    mouse.addAnimation("mouse",mouse1Img);
    mouse.scale=0.1;

}

function draw() {

    background(bgImg);

    cat.x=WorLd.catX;

    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<cat.width/2+mouse.width/2 && 
       mouse.x-cat.x<cat.width/2+mouse.width/2 &&
       cat.y-mouse.y<cat.height/2+mouse.height/2 &&
       mouse.y-cat.y<mouse.height/2+cat.height/2)
       {
    
        mouse.addAnimation("happy",mouse3Img);
        mouse.changeAnimation("happy");
        mouse.frameDelay=25;

        cat.addAnimation("happy",cat3Img);
        cat.changeAnimation("happy");
        cat.frameDelay=25;

    }

    drawSprites();
}


/*function keyPressed(){

  //For moving and changing animation write code here
cat

cat 

}*/
