/// <reference path="../libs/p5.d.ts"/>
/// <reference path="../libs/p5.global-mode.d.ts"/>

function spawn_clouds() {
    if (frameCount % 60 === 0) {
        var cloud = createSprite(856, 120, 40, 10);
        cloud.y = Math.round(random(80, 120));
        cloud.addImage(cloud_image);
        cloud.scale = 0.5;
        cloud.velocityX = -3;

        //assign lifetime to the variable
        cloud.lifetime = 482;

        //adjust the depth
        cloud.depth = trex_sprite.depth;
        trex_sprite.depth = trex_sprite.depth + 1;

        //add each cloud to the group
        cloud_group.add(cloud);
    }
}