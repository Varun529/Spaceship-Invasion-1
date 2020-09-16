//sprite variables
var bg, warrior, enemy, playButton;
//image variables
var spaceShipInsideBg, firstPageBg, warriorImg; 

var gameState="start";



function preload()
{
	firstPageBg=loadImage("images/firstPage.jpg");
	warriorImg=loadImage("images/warrior.png");
}

function setup() {
	createCanvas(displayWidth, displayHeight);
	bg=createSprite(displayWidth/2,displayHeight/2,width,height);
	bg.addImage("fp",firstPageBg);
	//bg.addImage();
	playButton = createButton('Play');
	playButton.style("width","75px");
	playButton.style("height","50px");
	playButton.style("background-color","green");
	playButton.visible=false;
	warrior=createSprite(displayWidth/2-400,displayHeight/2+300);
	
	warrior.addImage("blue",warriorImg);
	warrior.scale=0.15;
	warrior.visible=false;
	




	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(gameState==="start"){
	
	playButton.position(displayWidth/2-30, displayHeight/2+100);
	playButton.mousePressed(()=>{
	  //console.log("button");
	  gameState="play";	
	});
  }

  if(gameState==="play"){
	playButton.hide();  
	warrior.visible=true;
	if(keyIsDown(UP_ARROW)){
		warrior.y +=-7;
	}
	if(keyIsDown(DOWN_ARROW)){
		warrior.y+=7;
	}
	if(keyIsDown(RIGHT_ARROW)){
		warrior.x+=7;
	}
	if(keyIsDown(LEFT_ARROW)){
		warrior.x+=-7;
	}
  }
  drawSprites();
 
}



