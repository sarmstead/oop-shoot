import Circle from './circle.mjs'

export default class Enemy extends Circle {
  constructor(...base) {
    super(...base)
    this.x = this.canvas.width + 100
  }

  draw() {
    this.x -= 5
    if (this.x < -this.radius) {
      this.x = this.canvas.width + 100
    }

    super.draw()
  }
}
