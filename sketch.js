/// <reference path="libs/p5.d.ts"/>
/// <reference path="libs/p5.global-mode.d.ts"/>

const W = window.innerWidth;
const H = window.innerHeight;

const START = 0;
const PLAY = 1;
const END = 2;

var game_state = START;

// scores
var score = 0;
localStorage["HighestScore"] = 0;

// start screen
var start_button, title, by;

// play screen
// trex
var trex_sprite, trex_anim, trex_collide;
var trex1, trex2, trex3, trex_c;

// ground
var ground, ground_image, invis_ground;

// sounds
var jump, checkpoint, die;

function preload() {
    // trex images
    trex1 = loadImage("trex/trex1.png");
    trex2 = loadImage("trex/trex2.png");
    trex3 = loadImage("trex/trex3.png");
    trex_c = loadImage("trex/trex_c.png");

    // trex anim
    trex_anim = loadAnimation(trex1, trex2, trex3);
    trex_collide = loadAnimation(trex_c);

    // ground
    ground_image = loadImage("misc/ground2.png");

    // sounds
    jump = loadSound("sounds/jump.mp3");
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
    trex_sprite = createSprite(30, H / 2, 20, 50);
    trex_sprite.addAnimation("run", trex_anim);
    trex_sprite.addAnimation("collided", trex_collide);
    trex_sprite.scale = 0.5;

    trex_sprite.visible = false;

    // ground
    ground = createSprite(200, H / 2 + 15, 400, 20);
    ground.addImage("ground", ground_image);
    ground.x = ground.width / 2;
    ground.velocityX = -(6 + 3 * score / 100);

    invis_ground = createSprite(200, H / 2 + 17.5, 400, 10);
    invis_ground.visible = false;
}

function draw() {
    background(255);

    textSize(20);

    if (game_state === START) {
        // ground velocity
        ground.velocityX = -(6 + 3);

        // infinite ground
        if (ground.x < 0) {
            ground.x = ground.width / 2;
        }
    } else if (game_state === PLAY) {
        trex_sprite.visible = true;
        trex_sprite.velocityY = trex_sprite.velocityY + 0.8
        trex_sprite.collide(invis_ground);

        // display score
        text("Score: " + score, 500, 50);

        // display highscore
        text("Highscore: " + localStorage["HighestScore"], 100, 50);

        // adding score
        score = score + Math.round(getFrameRate() / 60);

        // ground velocity
        ground.velocityX = -(6 + 3 * score / 100);

        // infinite ground
        if (ground.x < 0) {
            ground.x = ground.width / 2;
        }

        // trex jump
        if(keyDown("space") && trex.y > 161) {
            trex.velocityY = -12;
            jump.play();
        }
    } else if (game_state === END) {

    }

    drawSprites();
}
