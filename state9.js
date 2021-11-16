demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function()
    {
        game.stage.backgroundColor = "#c27c3e";
        console.log("state9");
        //game.state.start("state1")
        
        addChangeStateEventListeners();
    },
    update: function(){}
};