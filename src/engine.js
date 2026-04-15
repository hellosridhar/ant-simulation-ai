export class Engine {
  constructor(world) {
    this.world = world;
  }

  update() {
    this.world.update();
  }

  draw(ctx) {
    this.world.draw(ctx);
  }
}
