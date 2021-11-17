var demo = {};// we only need to make a game obj once
var centerX = 1500/2;
var centerY = 1000/2;
var adam;
var speed = 6;

demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.image("adam", "assets/sprites/adam.png", 240, 370);
        game.load.image("tree", "assets/backgrounds/treeBG.png");
    },
    create: function()
    {
        game.stage.backgroundColor = "#c27c3e";
        console.log("state0");
        // add an evt listener
        // game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1);
       
        addChangeStateEventListeners();
        game.world.setBounds(0, 0, 2813, 1000);

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_All;// adjust screen size

        var treeBG = game.add.sprite(0, 0, "tree");

        adam = game.add.sprite(centerX, centerY, "adam");
        // adam.anchor.x = 0.5; //is drawn from the center of the img
        // adam.anchor.y = 0.5; or
        adam.anchor.setTo(0.5, 0.5);
        adam.scale.setTo(0.6, 0.6);

        game.camera.follow(adam);// but we need to set bounds too
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            adam.x += speed;
        }else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            adam.x -= speed;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            adam.y -= speed;
        }else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            adam.y += speed;
        }
    }
};

function changeState(i, stateNum){
    // console.log(i);
    game.state.start("state" + stateNum);
};

function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners(){
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);

}

