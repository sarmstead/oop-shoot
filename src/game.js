import Circle from './circle.js';

export default class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.circle = new Circle(this.context, canvas.width + 100, 200, 70);
  }

  update() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.circle.x -= 1;
    if (this.circle.x < -100) {
      this.circle.x = this.canvas.width + 100;
    }
    this.circle.draw();
  }

  start() {
    setInterval(this.update.bind(this), 1000 / 60);
  }
}
