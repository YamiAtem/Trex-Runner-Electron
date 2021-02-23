function load_trex() {
    trex_sprite = createSprite(30, H / 2, 20, 50);
    trex_sprite.addAnimation("run", trex_anim);
    trex_sprite.addAnimation("collided", trex_collide);
    trex_sprite.scale = 0.5;
    
    trex_sprite.visible = false;
}
