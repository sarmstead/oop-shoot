import Image from './image.mjs'

export default class Player extends Image {
  constructor(...base) {
    super(...base)
    this.v = 10
  }

  moveUp() {
  this.y = Math.max(this.y - this.v, 0)

  }

  moveDown() {
    this.y = Math.min(this.y + this.v, this.canvas.height - this.height)
  }
}
