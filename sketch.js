var spider_man, spider_manrA, ig, carnageA, ggA, venomA, lizardA, electroA, rockImage, cloudImage, spider_manjA;
var gameState = "story";
var pButton, cButton, pButtonImage, cButtonImage;
var electroGroup, lizardGroup, greenyGroup, carnageGroup, venomGroup, platformGroup;
var rockGroup, cloudGroup;
var gameOver, gameOverImage, reset, resetImage;
var score = 0;
var coinGroup, coinImage;
var rand;
var groundImage;
var backg, backgImage;
var ground;

function preload() {
  groundImage = loadImage("ground-1.png");
   backgImage = loadImage("the background.png");
  coinImage = loadImage("coin sprite.png");
  gameOverImage = loadImage("game over.png");
  resetImage = loadImage("restart.png");
  spider_manjA = loadAnimation("spider man jumping_6.png", "spider man jumping_7.png")
  cButtonImage =  loadImage("controls button.png");
  pButtonImage = loadImage("play button.png");
  cloudImage = loadImage("cloud.png");
  rockImage = loadImage("rock.png");
  
  bgImage = loadImage("the background.png");

  ggA = loadAnimation("greeny_1.png", "greeny_2.png")
  spider_manrA = loadAnimation("spider man running_1.png", "spider man running_2.png", "spider man running_3.png", "spider man running_4.png", "spider man running_5.png", "spider man running_6.png", "spider man running_7.png", "spider man running_8.png", "spider man running_9.png", "spider man running_10.png", "spider man running_11.png");               
  
  
  carnageA = loadAnimation("carnage walk_1.png", "carnage walk_2.png", "carnage walk_3.png", "carnage walk_4.png", "carnage walk_5.png", "carnage spin_1.png", "carnage spin_2.png", "carnage spin_3.png", "carnage spin_4.png","carnage spin_1.png", "carnage spin_2.png", "carnage spin_3.png", "carnage spin_4.png", "carnage spin_1.png", "carnage spin_2.png", "carnage spin_3.png", "carnage spin_4.png",  "carnage walk_1.png", "carnage walk_2.png", "carnage walk_3.png", "carnage walk_4.png", "carnage walk_5.png", "carnage walk_1.png", "carnage walk_2.png", "carnage walk_3.png", "carnage walk_4.png", "carnage walk_5.png", "carnage walk_1.png", "carnage walk_2.png", "carnage walk_3.png", "carnage walk_4.png", "carnage walk_5.png", "carnage slash_1.png", "carnage slash_2.png", "carnage slash_3.png", "carnage slash_1.png", "carnage slash_2.png", "carnage slash_3.png", "carnage slash_1.png", "carnage slash_2.png", "carnage slash_3.png");
  
  venomA = loadAnimation("venom running 1.png", "venom running 2.png", "venom running 3.png", "venom running 4.png", "venom running 5.png", "venom running 6.png", "venom running 7.png", "venom running 8.png", "venom running 9.png", "venom running 10.png", "venom running 1.png", "venom running 2.png", "venom running 3.png", "venom running 4.png", "venom running 5.png", "venom running 6.png", "venom running 7.png", "venom running 8.png", "venom running 9.png", "venom running 10.png", "venom claw 1.png", "venom claw 2.png", "venom claw 3.png", "venom claw 4.png", "venom claw 5.png", "venom claw 6.png", "venom claw 7.png", "venom claw 8.png", "venom claw 9.png", "venom claw 10.png", "venom claw 1.png", "venom claw 2.png", "venom claw 3.png", "venom claw 4.png", "venom claw 5.png", "venom claw 6.png", "venom claw 7.png", "venom claw 8.png", "venom claw 9.png", "venom claw 10.png");
  
  lizardA = loadAnimation("lizard running 1.png", "lizard running 2.png", "lizard running 3.png", "lizard running 4.png", "lizard running 5.png", "lizard running 6.png", "lizard running 7.png", "lizard running 8.png", "lizard running 1.png", "lizard running 2.png", "lizard running 3.png", "lizard running 4.png", "lizard running 5.png", "lizard running 6.png", "lizard running 7.png", "lizard running 8.png", "lizard running 1.png", "lizard running 2.png", "lizard running 3.png", "lizard running 4.png", "lizard running 5.png", "lizard running 6.png", "lizard running 7.png", "lizard running 8.png", "lizard kick 1.png", "lizard kick 2.png", "lizard kick 3.png", "lizard kick 4.png", "lizard kick 4.png", "lizard kick 4.png");
  
  electroA = loadAnimation("electro walking_1.png", "electro walking_2.png", "electro walking_3.png", "electro walking_4.png", "electro walking_5.png", "electro walking_6.png", "electro walking_7.png", "electro walking_8.png", "electro walking_9.png", "electro walking_10.png");
}
function setup() {
  createCanvas(1000, 600);
  
 
  
  
  
  backg = createSprite(0, 0, 1, 1);
  backg.addImage(backgImage);
  backg.scale = 1.2;
  
  ground = createSprite(700, 575, 1500, 70);
  ground.addImage(groundImage);
  ground.scale = 0.4;
  ground.visible = false;
  
  pButton = createSprite(500, 400, 20, 20);
  pButton.addImage(pButtonImage);
  pButton.scale = 0.3;
  
  cButton = createSprite(500, 500, 20, 20);
  cButton.addImage(cButtonImage);
  cButton.scale = 0.3;
  
  spider_man = createSprite(200, 540, 10, 10);
  spider_man.addAnimation("spa", spider_manrA);
  spider_man.scale = 2;
  spider_man.setCollider("rectangle", 0, 0, 57.5, 56.5);
  spider_man.visible = false;
  
  ig = createSprite(300, 550, 1500, 10);
  ig.visible = false;
  
  

  
  electroGroup = new Group();
  venomGroup = new Group();
  carnageGroup = new Group();

  lizardGroup = new Group();
  greenyGroup = new Group();
  
  rockGroup = new Group();
  cloudGroup = new Group();
  coinGroup = new Group();
  
  gameOver = createSprite(500, 200, 20, 20);
  gameOver.addImage(gameOverImage);
  gameOver.visible = false;
  
 
  reset = createSprite(500, 400, 20, 20);
  reset.addImage(resetImage);
  reset.visible = false;
  reset.scale = 0.3
  
}

function draw() {
  background("white");
  spider_man.collide(ig)
  
  
  
  if (gameState == "story") {
    story();
    if (mousePressedOver(pButton)) {
      gameState = "play";
    }
    if (mousePressedOver(cButton)){
      gameState = "control"
    }
  }
  
  if (gameState == "control") {
    control();
   ground.visible = false;

  }
  
  if (gameState == "play") {
    backg.visible = true;
    backg.velocityX = -6;
    pButton.visible = false;
    cButton.visible = false;
    spider_man.visible = true;
    
   ground.visible = true;

    
    reset.visible = false;
    gameOver.visible = false;
    
    spawn();
    spawnObstacles();
    
    
    if (backg.x < 0) {
      backg.x = backg.width / 2;
    }
    
    if (keyDown("space") && spider_man.y > 484) {
      spider_man.velocityY = -15;
    }
    
    if (spider_man.isTouching(venomGroup) || spider_man.isTouching(greenyGroup) || spider_man.isTouching(lizardGroup) || spider_man.isTouching(carnageGroup) || spider_man.isTouching(electroGroup) || spider_man.isTouching(rockGroup)) {
      gameState = "end";
      spider_man.velocityY = 0;
    }
    if (spider_man.isTouching(coinGroup)) {
      coinGroup.destroyEach();
      score += 1;
    }
  }
  
  if (gameState == "end") {
    
    backg.velocityX = 0;
    
    spider_man.velocityX = 0;
    spider_man.velocityY = 0;
    
     ground.visible = true;

    
    cloudGroup.setVelocityXEach(0);
    venomGroup.setVelocityXEach(0);
    greenyGroup.setVelocityXEach(0);
    lizardGroup.setVelocityXEach(0);
    carnageGroup.setVelocityXEach(0);
    electroGroup.setVelocityXEach(0);
    rockGroup.setVelocityXEach(0);
    coinGroup.setVelocityXEach(0);
    
    cloudGroup.setVelocityYEach(0);
    venomGroup.setVelocityYEach(0);
    greenyGroup.setVelocityYEach(0);
    lizardGroup.setVelocityYEach(0);
    carnageGroup.setVelocityYEach(0);
    electroGroup.setVelocityYEach(0);
    rockGroup.setVelocityYEach(0);
    coinGroup.setVelocityYEach(0);
    
    cloudGroup.setLifetimeEach(-1);
    venomGroup.setLifetimeEach(-1);
    carnageGroup.setLifetimeEach(-1);
    lizardGroup.setLifetimeEach(-1);
    rockGroup.setLifetimeEach(-1);
    electroGroup.setLifetimeEach(-1);
    greenyGroup.setLifetimeEach(-1);
    coinGroup.setLifetimeEach(-1);
    
    reset.visible = true;
    gameOver.visible = true;
    
    if (mousePressedOver(reset)) {
      
      rockGroup.destroyEach();
      venomGroup.destroyEach();
      cloudGroup.destroyEach();
      greenyGroup.destroyEach();
      lizardGroup.destroyEach();
      carnageGroup.destroyEach();
      electroGroup.destroyEach();
      cloudGroup.destroyEach();
      coinGroup.destroyEach();
      gameState = "play";
      score = 0;
  
    }
    
  }
  spider_man.velocityY = spider_man.velocityY + 0.5;  
  
  
  drawSprites();
  textSize(15)
  stroke("yellow");
  fill("yellow");
  text("SCORE: " + score, 10, 580);


}


function story() {
  pButton.visible = true;
  cButton.visible = true;
  backg.visible = false;
  stroke("green");
  fill("green")
  text("YOU ARE THE FRIENDLY NEIGHBOURHOOD SPIDER MAN JUST SWINGING AROUND THE CITY, MINDING YOUR BUSINESS BUT YOU WERE CARPTURED BY NORMAN", 10, 20);
  text("OSBORN THE CEO OF OSCORP A.K.A THE GREEN GOBLIN, A LUNATIC DRIVEN BY A CRAZY ENMETY TOWARDS YOU. HE CAPTURES YOU TO PERFORM EXPERIMENTS", 10,40);
  text("ON YOU AND WANTS YOUR BLOOD SO AS TO TRANSFER THOSE POWERS TO HIMSELF SO AS TO GET YOUR POWERS!!!!!!", 10, 60);
  stroke("red");
  fill("red")
  text("HOWEVER YOU MANAGE TO ESCAPE FROM THE BUILDING AND ARE RUNNNG AWAY, YOU MANAGE TO GET SOME DISTANCE FROM THE BUILDING AND GO ON THE", 10, 80);
  text("ROOF OF A SKYSCRAPER. YOU ARE EXHAUSTED AND DECIDE TO LIE DOWN MEANWHILE NORMAN GOES TO THE PRISON OF NYC DRESSED AS THE GREEN GOBLIN ", 10, 100);
  text("AND TELLS THE SUPER VILLIAN PRISONERS LIKE VENOM, CARNAGE, ELECTRO AND TURNS POOR DOCTOR CURTIS  CONNERS TO THE LIZARD AND TELLS THAT IF THEY", 10, 120);
  text(" HELP HIM BRING BACK SPIDER-MAN HE WILL LET THEM FINISH HIM OFF AFTER HIS EXPERIMENT IS DONE. THE TWO FRIENDLY SYMBIOTES AGREE", 10, 140);
  text("GLADLY AND ELECTRO IS MORE THAN HAPPY.......THE LIZARD LETS OUT A RATHER MIRTHFUL HISS FULL OF WICKEDNESS", 10, 160);
  stroke("blue");
  fill("blue")
  text("NORMAN BREAKS OUT THE VILLIANS AND WITH AN EVIL LAUGH STARTS TO SEARCH FOR YOU.... IT IS NOT LONG BEFORE YOU WAKE UP BECUASE OF YOUR SPIDEY", 10, 180);
  text("SENSE WHICH WAS TRIGGERED WHEN VENOM TRIED TO HIT YOU...THE REST OF THE VILLIANS ARRIVE AND YOU HAVE ONLY ONE CHOICE.........", 10, 200);
  textSize(30)
  text("RUN!", 450, 300);
  
}

function control() {
  pButton.visible = false;
  cButton.visible = false;
  fill("black")
  
  stroke("black")
  text("CONTROLS", 450, 100);
  text("PRESS SPACE TO JUMP", 450, 200);
  text("PRESS b TO GO BACK", 10, 10);
  
  if (keyDown("b")) {
    gameState = "story";
  }
}

function spawnObstacles() {
  if (frameCount % 130 == 0) {
    rock = createSprite(1100, ig.y - 30, 20, 20);
    rock.velocityX = -7;
    rock.addImage(rockImage);
    rock.lifetime = 300;
    rockGroup.add(rock);
  }
  
  if (frameCount % 160 == 0) {
    cloud = createSprite(1100, Math.round(random(20, 250)), 20, 20);
    cloud.velocityX = -6;
    cloud.addImage(cloudImage);
    cloud.lifetime = 300;
    spider_man.depth = cloud.depth;
    spider_man.depth = cloud.depth + 1;
    cloudGroup.add(cloud);
  }
  
  if (frameCount % 270 == 0) {
    coin = createSprite(1100, Math.round(random(300, spider_man.y)), 20, 20);
    coin.addImage(coinImage);
    coin.velocityX = -6;
    coin.scale = 0.2;
    coinGroup.add(coin);
  }
  
}


function spawn() {
  if (frameCount % 400 == 0) {
    rand = Math.round(random(1, 5));
    if (rand == 1) {
      carnage = createSprite(1100, 0, 20, 20);
        carnage.addAnimation("cA", carnageA);
        carnage.lifetime = 300;
        carnage.velocityX  = -14;
        carnage.velocityY = Math.round(random(5, 8));
        carnage.setCollider("rectangle", 0, 0, carnage.width - 10, carnage.height - 10);
        carnageGroup.add(carnage);
    }
    
    if (rand == 2) {
      electro = createSprite(1100, 0, 20, 20);
        electro.addAnimation("eA", electroA);
        electro.lifetime = 200;
        electro.velocityX = -14;
        electro.velocityY = Math.round(random(5, 8));
        electro.scale = 1.5;
        
        electroGroup.add(electro);
    }   
    
    if (rand == 3) {
      gg = createSprite(1100, 0, 20, 20);
      gg.addAnimation("gA", ggA);
      gg.velocityX = -16;
      gg.velocityY = Math.round(random(5, 8));
      gg.lifetime = 200;

      greenyGroup.add(gg);
    }
    
    if (rand == 4) {
      lizard = createSprite(1100, 0, 20, 20);
      lizard.addAnimation("lA", lizardA);
      lizard.velocityX = -14;
      lizard.velocityY = Math.round(random(5, 9));
 
      lizardGroup.add(lizard);
    }
    if (rand == 5) {
      venom = createSprite(1100, 0, 20, 20);
      venom.addAnimation("vA", venomA);
      venom.lifetime = 300;
      venom.velocityX = -14;
      venom.velocityY = Math.round(random(5, 8)); 
      venom.scale = 1.7;
      venom.setCollider("rectangle", 0, 0, venom.width - 50, venom.height - 50)
      venomGroup.add(venom);
    }
    
  }
}
  
  
  