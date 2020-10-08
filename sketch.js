
var database,game,player,form,playerCount=0;
var allPLayers;
var gameState=0;

function setup() {
  createCanvas(displayWidth-100,displayHeight-100);
  database = firebase.database();
  game = new Game();
  game.start();

}

function draw() {
 if(playerCount===2){
game.update(1);
 }

 if(gameState===1){
   clear();
   game.play();
 }

  
}