function load_ground() {
    ground = createSprite(200, H / 2 + 15, 400, 20);
    ground.addImage("ground", ground_image);
    ground.x = ground.width / 2;
    ground.velocityX = -(6 + 3 * score / 100);
    
    invis_ground = createSprite(200, H / 2 + 17.5, 400, 10);
    invis_ground.visible = false;
}
