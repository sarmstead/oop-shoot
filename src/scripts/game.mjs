import Player from './player.mjs'
import Enemy from './enemy.mjs'

let downPressed = false
let upPressed = false
let radius = 30
export default class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d')
    this.player = new Player('image__player', 438, 150, canvas, 10, this.canvas.height-150)
    this.enemySpaghetti = new Enemy('image__enemy--spaghetti', 200, 200, canvas, 30, 0)
    this.enemyBloat = new Enemy('image__enemy--bloat', 200, 200, canvas, 30, this.canvas.height-200)
    this.objects = [this.player, this.enemySpaghetti, this.enemyBloat]
  }

  update() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear all the pixels of the canvas, starting at grid points 0, 0

    if (downPressed) {
     this.player.moveDown()
    } else if (upPressed) {
      this.player.moveUp()
    }

    this.objects.forEach(obj => obj.draw())
    this.checkDamage(this.enemySpaghetti)
    this.checkDamage(this.enemyBloat)
  }

  checkDamage(enemy) {
    const topOfEnemy = enemy.y
    const bottomOfEnemy = topOfEnemy - enemy.height
    const topOfPlayer = this.player.y
    const bottomOfPlayer = topOfPlayer - this.player.height
    const leftEdgeOfEnemy = enemy.x
    const rightEdgeOfEnemy = leftEdgeOfEnemy + enemy.width
    const leftEdgeOfPlayer = this.player.x
    const rightEdgeOfPlayer = leftEdgeOfPlayer + this.player.width

    const horizontal = leftEdgeOfEnemy <= rightEdgeOfPlayer && rightEdgeOfEnemy >= leftEdgeOfPlayer
    const vertical = bottomOfEnemy <= topOfPlayer && topOfEnemy >= bottomOfPlayer

    if (vertical && horizontal) {
      this.stop()
    }

    return
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

  stop() {
    clearInterval(this.startInterval)
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.font = '48px sans-serif'
    this.context.textAlign = 'center'
    this.context.fillText('GAME OVER', this.canvas.width / 2, this.canvas.height / 2)
  }

  start() {
    this.startInterval = setInterval(this.update.bind(this), 10); // setInterval repeatedly calls the update() function every 10 milliseconds
    this.startInterval
    document.addEventListener('keydown', this.keydownHandler, false)
    document.addEventListener('keyup', this.keyupHandler, false)
  }
}
