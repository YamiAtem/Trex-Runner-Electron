function reset() {
    game_state = START;
    game_over.visible = false;
    restart.visible = false;

    title.show();
    by.show();
    start_button.show();

    obstacles_group.destroyEach();
    cloud_group.destroyEach();

    trex_sprite.changeAnimation("running", trex_anim);

    if (localStorage["HighestScore"] < score) {
        localStorage["HighestScore"] = score;
    }
    console.log(localStorage["HighestScore"]);

    score = 0;
}