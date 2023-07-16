import Circle from './circle.mjs';
import { Hero, Enemy } from './player.mjs';

export default class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.circle = new Circle(this.context, - 70, canvas.height / 2, 70); // circle is initialized outside of the canvas bounding box
  }

  update() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear all the pixels of the canvas, starting at grid points 0, 0
    this.circle.x += 1; // every time update() is called, subtract 1 from its current x value
    if (this.circle.x > this.canvas.width + 70) {
      this.circle.x = - 70;
    }

    this.circle.draw();
  }

  move(event) {
    switch(event.key) {
      case 'ArrowUp':
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.circle.y -= 30
      case 'ArrowDown':
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.circle.y += 30
      }
      this.circle.draw();
  }

  start() {
  setInterval(this.update.bind(this), 2); // setInterval repeatedly calls the update() function every 1000 / 60 milliseconds
    document.addEventListener('keydown', (event) => this.move(event), false)
  }
}
