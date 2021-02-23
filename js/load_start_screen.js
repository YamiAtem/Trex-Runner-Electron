function load_start_screen() {
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
}