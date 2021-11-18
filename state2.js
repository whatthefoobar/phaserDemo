demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function()
    {
        game.stage.backgroundColor = "#c27c3e";
        //game.state.start("state1")
        
        addChangeStateEventListeners();
    },
    update: function(){}
};