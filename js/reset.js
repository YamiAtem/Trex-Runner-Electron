/// <reference path="../libs/p5.d.ts"/>
/// <reference path="../libs/p5.global-mode.d.ts"/>

function reset() {
    game_state = START;
    game_over.visible = false;
    restart.visible = false;

    title.show();
    by.show();
    start_button.show();

    obstacles_group.destroyEach();
    cloud_group.destroyEach();

    trex.changeAnimation("running", trex_running);

    if (localStorage["HighestScore"] < score) {
        localStorage["HighestScore"] = score;
    }
    console.log(localStorage["HighestScore"]);

    score = 0;
}