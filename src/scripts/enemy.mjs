import Image from './image.mjs'

export default class Enemy extends Image {
  constructor(...base) {
    super(...base)
    this.x = this.canvas.width + 100
  }

  draw() {
    this.x -= 5
    if (this.x < -this.width) {
      this.x = this.canvas.width + 100
    }

    super.draw()
  }
}
