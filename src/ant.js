export class Ant {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.speed = 1.5;
    this.energy = 100;
    this.direction = Math.random() * Math.PI * 2;
  }

  update(world) {
    // energy slowly decreases
    this.energy -= 0.05;

    // random movement (simple AI start)
    this.direction += (Math.random() - 0.5) * 0.2;

    this.x += Math.cos(this.direction) * this.speed;
    this.y += Math.sin(this.direction) * this.speed;

    // boundary wrap
    if (this.x < 0) this.x = world.width;
    if (this.x > world.width) this.x = 0;
    if (this.y < 0) this.y = world.height;
    if (this.y > world.height) this.y = 0;

    // eating food
    world.food.forEach((food, index) => {
      const dx = this.x - food.x;
      const dy = this.y - food.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 10) {
        this.energy += 30;
        world.food.splice(index, 1);
      }
    });
  }

  draw(ctx) {
    // ant body
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
    ctx.fill();

    // energy bar (simple emotion indicator)
    ctx.fillStyle = this.energy > 50 ? "green" : "red";
    ctx.fillRect(this.x - 5, this.y - 10, 10, 2);
  }
}
