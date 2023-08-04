import GameObject from './game-object.mjs'
export default class Circle extends GameObject {
  constructor(radius, ...base) {
    super(...base)
    this.radius = radius
  }

  draw() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
    this.context.fillStyle = 'green'
    this.context.fill()
    this.context.closePath()
  }
}
