import Circle from './circle.mjs';
import { Hero, Enemy } from './player.mjs';

let downPressed = false
let upPressed = false
let radius = 30
let changeInY = 10
export default class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.circle = new Circle(this.context, - 70, canvas.height / 2, radius); // circle is initialized outside of the canvas bounding box

  }

  update() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear all the pixels of the canvas, starting at grid points 0, 0
    this.circle.x += 5; // every time update() is called, add 5 to its current x value
    if (this.circle.x > this.canvas.width + radius) {
      this.circle.x = - radius;
    }

    if (downPressed) {
      this.circle.y = Math.min(this.circle.y + changeInY, this.canvas.height - radius)
    } else if (upPressed) {
      this.circle.y = Math.max(this.circle.y - changeInY, radius)
    }

    this.circle.draw();
  }

  keydownHandler(event) {
    if (event.key === 'Up' || event.key === 'ArrowUp') {
      upPressed = true
    } else if (event.key === 'Down' || event.key === 'ArrowDown') {
      downPressed = true
    }
  }

  keyupHandler(event) {
    if (event.key === 'Up' || event.key === 'ArrowUp') {
      upPressed = false
    } else if (event.key === 'Down' || event.key === 'ArrowDown') {
      downPressed = false
    }
  }

  start() {
    setInterval(this.update.bind(this), 10); // setInterval repeatedly calls the update() function every 10 milliseconds
    document.addEventListener('keydown', this.keydownHandler, false)
    document.addEventListener('keyup', this.keyupHandler, false)
  }
}
