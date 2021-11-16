demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){},
    create: function()
    {
        game.stage.backgroundColor = "#c27c3e";
        console.log("state5");
        //game.state.start("state1")
        
        addChangeStateEventListeners();
    },
    update: function(){}
};