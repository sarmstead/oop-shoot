import GameObject from './game-object.mjs'

export default class Image extends GameObject {
  constructor(id, width, height, ...base) {
    super(...base)
    this.context = this.canvas.getContext('2d')
    this.width = width
    this.height = height
    this.id = id
    this.image = document.getElementById(this.id)
  }

  draw() {
    this.context.beginPath()
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height)
    this.context.closePath()
  }
}
