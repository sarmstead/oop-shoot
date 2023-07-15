import Game from './game.js';

window.onload = function() {
  let canvas = document.getElementById('gameCanvas');
  let game = new Game(canvas);
  game.start();
}
