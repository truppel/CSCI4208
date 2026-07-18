class PlayScene extends Phaser.Scene {
    constructor() {
        super("play");
    }
    preload() {
        this.load.path = "assets/";
        this.load.image("background", "background.png");
        this.load.image("player", "player.png");
        this.load.image("enemy", "enemy.png");
    }
    create() {
        this.create_map();
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
    game_over() {
        this.cameras.main.flash();
        this.scene.restart();
    }
}