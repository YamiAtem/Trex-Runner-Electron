function load_game_over() {
    game_over = createSprite(W/2, 100);
    game_over.addImage(game_over_image);
    
    restart = createSprite(W/2, 140);
    restart.addImage(restart_image);
    
    game_over.scale = 0.5;
    restart.scale = 0.5;
    
    game_over.visible = false;
    restart.visible = false;
}
