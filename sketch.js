const W = window.innerWidth;
const H = window.innerHeight;

const START = 0;
const PLAY = 1;
const END = 2;

var game_state = START;

// start screen
var start_button, title, by;

function setup() {
    createCanvas(W, H);

    // start screen
    title = createElement('h1');
    title.html("TRex Runner");
    title.position(W/2-165, H/2-250);
    title.id("title");

    by = createElement('h3');
    by.html("By: Atharva Mishra");
    by.position(W/2-75, H/2-150);
    by.id("by");

    start_button = createButton("Play!");
    start_button.size(100, 50);
    start_button.position((W/2)-50, (H/2)-25);
    start_button.id("start_button");

    start_button.mousePressed(() => {
        start_button.hide();
        title.hide();
        by.hide();

        game_state = PLAY;
    });
}

function draw() {
    if (game_state === PLAY) {

    } else if (game_state === END) {

    }
}
