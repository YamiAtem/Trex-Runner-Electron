const W = window.innerWidth;
const H = window.innerHeight;

const START = 0;
const PLAY = 1;
const END = 2;

var game_state = START;

// start screen
var start_button, title, by;

// play screen
// trex
var trex_sprite, trex_anim, trex_collide;
var trex1, trex2, trex3, trex_c;

function preload() {
    // trex images
    trex1 = loadImage("trex/trex1.png");
    trex2 = loadImage("trex/trex2.png");
    trex3 = loadImage("trex/trex3.png");
    trex_c = loadImage("trex/trex_c.png");

    // trex anim
    trex_anim = loadAnimation(trex1, trex2, trex3);
    trex_collide = loadAnimation(trex_c);
}

function setup() {
    createCanvas(W, H);

    // start screen
    title = createElement('h1');
    title.html("TRex Runner");
    title.position(W / 2 - 165, H / 2 - 250);
    title.id("title");

    by = createElement('h3');
    by.html("By: Atharva Mishra");
    by.position(W / 2 - 75, H / 2 - 150);
    by.id("by");

    start_button = createButton("Play!");
    start_button.size(100, 50);
    start_button.position((W / 2) - 50, (H / 2) - 25);
    start_button.id("start_button");

    start_button.mousePressed(() => {
        start_button.hide();
        title.hide();
        by.hide();

        game_state = PLAY;
    });

    // play screen
    // trex
    trex_sprite = createSprite(50, 180, 20, 50);
    trex_sprite.addAnimation("run", trex_anim);
    trex_sprite.addAnimation("collided", trex_collide);
    trex_sprite.scale = 0.5;

    trex_sprite.visible = false;
}

function draw() {
    background(255);

    textSize(20);
    // display score
    text("Score: " + score, 500, 50);

    // display highscore
    text("Highscore: " + localStorage["HighestScore"], 100, 50);

    if (game_state === PLAY) {
        trex_sprite.visible = true;
    } else if (game_state === END) {

    }

    drawSprites();
}
