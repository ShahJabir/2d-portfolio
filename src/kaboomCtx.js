import { kaboom } from "kaboom";

const kaboomCtx = kaboom({
    global: false,
    TouchEvent: true,
    canvas: document.getElementById("game"),
    ui: document.getElementById("ui"),
});

export default kaboomCtx;
