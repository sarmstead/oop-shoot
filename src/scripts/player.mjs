class Player {
  constructor(x, y, color, health) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.health = health;
  }
}

export class Hero extends Player {
  constructor(name, ...base) {
    super(...base)
    this.name = name
  }
}

export class Enemy extends Player {
  constructor(height, width, ...base) {
    super(...base)
    this.height = height
    this.width = width
  }
}
