import Game from './game.mjs';

window.onload = function() {
  let canvas = document.getElementById('gameCanvas');
  let game = new Game(canvas);
  game.start();
}
