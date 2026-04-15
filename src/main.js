import { World } from "./world.js";
import { Engine } from "./engine.js";

const canvas = document.getElementById("game");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const world = new World(canvas.width, canvas.height);
const engine = new Engine(world);

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  engine.update();
  engine.draw(ctx);

  requestAnimationFrame(loop);
}

loop();
