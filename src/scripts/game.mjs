import Player from './player.mjs'
import Enemy from './enemy.mjs'

let downPressed = false
let upPressed = false
let radius = 30
export default class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d')
    this.player = new Player('image__player', 438, 150, canvas, 30, 100)
    this.enemy = new Enemy(radius, canvas, 30, 100)
    this.objects = [this.player, this.enemy]
  }

  addObject(obj) {
    this.objects.push(obj)
  }

  update() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear all the pixels of the canvas, starting at grid points 0, 0


    if (downPressed) {
     this.player.moveDown()
    } else if (upPressed) {
      this.player.moveUp()
    }


    this.objects.forEach(obj => obj.draw())
  }

  keydownHandler(event) {
    if (event.key === 'Up' || event.key === 'ArrowUp') {
      upPressed = true
    } else if (event.key === 'Down' || event.key === 'ArrowDown') {
      downPressed = true
    }
  }

  keyupHandler(event) {
    if (event.key === 'Up' || event.key === 'ArrowUp') {
      upPressed = false
    } else if (event.key === 'Down' || event.key === 'ArrowDown') {
      downPressed = false
    }
  }

  start() {
    setInterval(this.update.bind(this), 10); // setInterval repeatedly calls the update() function every 10 milliseconds
    document.addEventListener('keydown', this.keydownHandler, false)
    document.addEventListener('keyup', this.keyupHandler, false)
  }
}
