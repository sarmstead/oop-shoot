import Circle from './circle.js';

export default class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.circle = new Circle(this.context, canvas.width + 100, 200, 70); // circle is initialized outside of the canvas bounding box
  }

  update() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear all the pixels of the canvas, starting at grid points 0, 0
    this.circle.x -= 1; // every time update() is called, subtract 1 from its current x value
    if (this.circle.x < -100) {
      this.circle.x = this.canvas.width + 100;
    }
    this.circle.draw();
  }

  start() {
    setInterval(this.update.bind(this), 1000 / 60); // setInterval repeatedly calls the update() function every 1000 / 60 milliseconds
  }
}
