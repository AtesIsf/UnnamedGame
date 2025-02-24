import {Helpers} from "./helpers.js";
import {Entity} from "./entity.js";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

ctx.imageSmoothingEnabled = true;
ctx.imageSmoothingQuality = "high";

Helpers.entities.push(new Entity("infantry", 19, 19));
Helpers.entities.push(new Entity("tower", 0, 0));
Helpers.entities.push(new Entity("infantry", 19, 0));
Helpers.entities.push(new Entity("tower", 0, 19));

window.onload = () => {
	Helpers.setupInputs();
	Helpers.draw(ctx);
}

