demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function()
    {
        game.stage.backgroundColor = "#c27c3e";
        console.log("state3");
        //game.state.start("state1")
        
        addChangeStateEventListeners();
    },
    update: function(){}
};