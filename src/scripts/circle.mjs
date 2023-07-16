export default class Circle {
  constructor(context, x, y, radius) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw(deltaX, deltaY) {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.context.moveTo(this.x + deltaX, this.y + deltaY)
    this.context.fillStyle = 'green';
    this.context.fill();
    this.context.stroke();
    this.context.closePath()
  }
}
