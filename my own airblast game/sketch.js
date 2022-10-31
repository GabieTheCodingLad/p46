var sollyImage,povImage,rocketImage,demoImage,grnadImage,tarImg,backImg,flowerImg
var soldier,pov,rocket,demo,grenade,target,background,flower
var airblast,abDist,bgMusic,countdown,Blasted = false

function preload() {
   backImg = loadImage("background.png")
   sollyImage = loadImage("solly.png")
   povImage = loadImage("pyroPov.png")
   rocketImage = loadImage("rocket.png")
   demoImage = loadImage("demoman.png")
   grnadImage = loadImage("grenade.png")
   airblast = loadSound("airblast.mp3")
   tarImg = loadImage("fucker.png")
   bgMusic = loadSound("bgMusic.mp3")
   countdown = loadSound("countdown.mp3")
   flowerImg = loadImage("flower.png")

  
}

function setup() {
    createCanvas(1350,600);
    background = createSprite(width/2,height/2 - 50,width,height)
    background.addImage(backImg)
pov = createSprite(width/2,height/2 + 112,width,height)
pov.addImage(povImage)
target = createSprite(width/2,height/2,10,20)
target.addImage(tarImg)
target.scale = 0.5
flower = createSprite(1100,500,15,35)
flower.scale = 0.2
flower.addImage(flowerImg)
  matx = []
  countdown.play()
  setTimeout(() => {
   bgMusic.play()
  bgMusic.loop = true;
  bgMusic.setVolume(0.15)
}, 7000);
  
    


}

function draw() {
   attacker = Math.round(random(1,2))
   if (frameCount % 30 == 0) {
   pos = random(100,1250)
   pos2 = random(100,300)
   }
    drawSprites();
    console.log(Math.round(frameCount/160 - 1.5));
    setTimeout(() => {
    peekaboo();

    }, 6900)
    

for(var i =0; i < matx.length; i++){
    distX = matx[i].x - pov.x
    distY = matx[i].y - pov.y - 50

    if(distX<0&&Blasted == false){
        matx[i].velocityX = distX/-10
    } else if (Blasted == false){
        matx[i].velocityX = distX/-10
    }

    if(distY<0&&Blasted == false){
        matx[i].velocityY = distY/-10
    }
    if (!airblast.isPlaying()==true) {
        if (mouseIsPressed) {
            airblast.setVolume(0.3)
            airBlast(i)
        console.log("i = " + i)
        }

}
}

}

function peekaboo() {
    if (frameCount % 160 == 0 && attacker == 1) {
        soldier = createSprite(pos,pos2,15,35)
        soldier.addImage(sollyImage)
        soldier.lifetime = 80
        soldier.scale = 0.7
        setTimeout(() => {
            rocket = createSprite(pos,pos2,20,10)
            rocket.addImage(rocketImage)
            rocket.lifetime = 90
            rocket.scale = 0.7
            matx.push(rocket)
            
        }, 300);
    } else if (frameCount % 160 == 0 && attacker == 2) {
        demo = createSprite(pos,pos2,20,40)
        demo.addImage(demoImage)
        demo.width = 0.7
        demo.height = 0.7
        demo.lifetime = 80
        demo.scale = 0.7
        setTimeout(() => {
            grenade = createSprite(pos,pos2,10,10)
            grenade.addImage(grnadImage)
            grenade.lifetime = 90
            grenade.scale = 0.7
            matx.push(grenade)
        }, 300);
    } }

function airBlast(i) {
airblast.play()
 
if(matx[i - i].isTouching(pov)){
   Blasted = true 
    matx[i - i].velocityX = 0
    matx[i - i].velocityY = -6

    setTimeout(() => {
        Blasted = false
    }, 2500);
}
i++
}



