demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){},
    create: function()
    {
        game.stage.backgroundColor = "#c27c3e";
        console.log("state8");
        //game.state.start("state1")
        
        addChangeStateEventListeners();
    },
    update: function(){}
};