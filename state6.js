demo.state6 = function(){};
demo.state6.prototype = {
    preload: function(){},
    create: function()
    {
        game.stage.backgroundColor = "#c27c3e";
        console.log("state6");
        //game.state.start("state1")
        
        addChangeStateEventListeners();
    },
    update: function(){}
};