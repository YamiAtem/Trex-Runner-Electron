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

// clouds 
var cloud_image, cloud_group;

// obstacles
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacles_group;

// game over
var game_over, restart, restart_image, game_over_image;

// sounds
var jump, checkpoint, die;

function preload() {
    // trex images
    load_trex_images();

    // ground
    ground_image = loadImage("misc/ground2.png");

    // clouds
    cloud_image = loadImage("misc/cloud.png");

    // obstalces
    load_obstacle_images();

    // game over images
    game_over_image = loadImage("misc/gameOver.png");
    restart_image = loadImage("misc/restart.png");

    // sounds
    jump = loadSound("sounds/jump.mp3");
    die = loadSound("sounds/die.mp3");
    checkpoint = loadSound("sounds/checkPoint.mp3");
}

function setup() {
    createCanvas(W, H);

    // start screen
    load_start_screen();

    // play screen
    // trex
    load_trex();

    // ground
    load_ground();

    // game over
    load_game_over();


    // groups
    cloud_group = new Group();
    obstacles_group = new Group();

    score = 0;
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
        if (keyDown("space") && trex_sprite.y > 210.75) {
            trex_sprite.velocityY = -12;
            jump.play();
        }

        // game over
        if (obstacles_group.isTouching(trex_sprite)) {
            game_state = END;
            die.play();
        }

        // spawn clouds
        spawn_clouds();

        // spawn obstacles
        spawn_obstacles();
    } else if (game_state === END) {
        game_over.visible = true;
        restart.visible = true;

        //set velcity of each game object to 0
        ground.velocityX = 0;
        trex_sprite.velocityY = 0;
        obstacles_group.setVelocityXEach(0);
        cloud_group.setVelocityXEach(0);

        //change the trex animation
        trex_sprite.changeAnimation("collided", trex_collide);

        //set lifetime of the game objects so that they are never destroyed
        obstacles_group.setLifetimeEach(-1);
        cloud_group.setLifetimeEach(-1);

        if (mousePressedOver(restart)) {
            reset();
        }
    }

    drawSprites();
}
