class Player extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        super(scene, 300, 200, "player");
        this.depth = 2;
        this.speed = 200;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setCollideWorldBounds(true);
        this.body.setSize(this.width-16,this.height-16);
        this.buttons = scene.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D
        });
    }
    move() {
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;
        if (this.buttons.up.isDown) {
            this.body.velocity.y = -this.speed;
        }
        if (this.buttons.down.isDown) {
            this.body.velocity.y = this.speed;
        }
        if (this.buttons.left.isDown) {
            this.body.velocity.x = -this.speed;
        }
        if (this.buttons.right.isDown) {
            this.body.velocity.x = this.speed;
        }
    }
}