// GameObject defines the interface (the class methods). It's an abstract base class
export default class GameObject {
  constructor(canvas, x, y, color, health) {
    this.canvas = canvas
    this.context = canvas.getContext('2d')
    this.x = x
    this.y = y
    this.color = color
    this.health = health
  }

  draw() {
    throw new Error('Please define a draw() method on this class')
  }
}
