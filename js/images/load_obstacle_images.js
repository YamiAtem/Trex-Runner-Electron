function load_obstacle_images() {
    // trex images
    trex1 = loadImage("trex/trex1.png");
    trex2 = loadImage("trex/trex2.png");
    trex3 = loadImage("trex/trex3.png");
    trex_c = loadImage("trex/trex_c.png");

    // trex anim
    trex_anim = loadAnimation(trex1, trex2, trex3);
    trex_collide = loadAnimation(trex_c);
}