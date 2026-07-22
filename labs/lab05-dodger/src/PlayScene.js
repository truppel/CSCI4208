class PlayScene extends Phaser.Scene {
    constructor() {
        super("play");
    }
    preload() {
        this.load.path = "assets/";
        this.load.image("background", "background.png");
        this.load.image("player", "player.png");
        this.load.image("enemy", "enemy.png");
        this.load.image("player-0", "player-0.png");
        this.load.image("player-1", "player-1.png");
    }
    create() {
        this.create_map();
        this.create_animations();
        this.create_player();
        this.create_enemies();
        this.create_collisions();
    }
    update() {
        this.update_player();
        this.update_background();
    }
    
    create_map() {
        // this.add.image(640/2, 480/2, "background");
        this.background = this.add.tileSprite(640/2, 480/2, 640, 480, "background");
    }
    update_background() {
        this.background.tilePositionX += 3;
    }
    create_player() {
        this.player = new Player(this);
    }
    update_player() {
        this.player.move();
    }
    create_enemies() {
        this.enemies = [];

        const event = new Object();
        event.delay = 200;
        event.callback = this.spawn_enemy;
        event.callbackScope = this;
        event.loop = true;
        this.time.addEvent(event,this);
    }
    spawn_enemy() {
        // const position = {};
        // position.x = Phaser.Math.Between(0, 640);
        // position.y = Phaser.Math.Between(0, 480);
        // const monster = new Enemy(this, position);
        // this.enemies.push(monster);
        const config = {};
        config.y = Phaser.Math.Between(0, 480);
        const monster = new Enemy(this, config);
        this.enemies.push(monster);
    }
    create_collisions() {
        this.physics.add.overlap(this.player, this.enemies, this.game_over,null,this);
    }   
    create_animations() {
        if (!this.anims.exists("player-move")) {
            const anim_player_move = new Object();
            anim_player_move.key = "player-move";
            anim_player_move.frames = [{key: "player-0"}, {key: "player-1"}];
            anim_player_move.frameRate = 6;
            anim_player_move.repeat = -1;
            this.anims.create(anim_player_move);
        }
        this.anims.create({
            key: "player-idle",
            frames: this.anims.generateFrameNames("player-0"),
            repeat: -1
        });
        this.anims.create({
            key: "player-move",
            frames: this.anims.generateFrameNames("player-1"),
            repeat: -1
        });
    }
    game_over() {
        this.cameras.main.flash();
        this.scene.restart();
    }
}