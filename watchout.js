// start slingin' some d3 here.
var gameOptions = {
  height: 450,
  width: 700,
  nEnemies: 20,
  padding: 20
}

var gameStats = {
  highScore: 0,
  currentScore: 0,
  collisions: 0
}

var gameBoard = d3.select("body").append("svg")
  .attr({
    "width" : gameOptions.width,
    "height": gameOptions.height
  })
  .style({
    "border" : "5px solid black"
  })
  .classed("gameBoard", true);

var mario = new Mario(16, 32);
var shells = new Shells();

var scoreTicker = function(){
  d3.select(".current span").text(gameStats.currentScore);
  d3.select(".high span").text(gameStats.highScore);
  d3.select(".collisions span").text(gameStats.collisions);
  gameStats.currentScore++;
}

setInterval(shells.moveGreenShells, 2000);
setInterval(shells.moveRedShells, 1000);
setInterval(shells.moveBlueShells, 500);
setInterval(scoreTicker, 100);
d3.timer(shells.detectCollisions);

