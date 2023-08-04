import Circle from './circle.mjs'

export default class Player extends Circle {
  constructor(...base) {
    super(...base)
    this.v = 10
  }

  moveUp() {
  this.y = Math.max(this.y - this.v, this.radius)

  }

  moveDown() {
    this.y = Math.min(this.y + this.v, this.canvas.height - this.radius)
  }
}
