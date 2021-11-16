demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function()
    {
        game.stage.backgroundColor = "#c27c3e";
        console.log("state4");
        //game.state.start("state1")
        
        addChangeStateEventListeners();
    },
    update: function(){}
};