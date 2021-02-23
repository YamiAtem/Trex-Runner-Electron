function load_game_over() {
    game_over = createSprite(300, 100);
    game_over.addImage(game_over_image);
    
    restart = createSprite(300, 140);
    restart.addImage(restart_image);
    
    game_over.scale = 0.5;
    restart.scale = 0.5;
    
    game_over.visible = false;
    restart.visible = false;
}
