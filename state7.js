demo.state7 = function(){};
demo.state7.prototype = {
    preload: function(){},
    create: function()
    {
        game.stage.backgroundColor = "#c27c3e";
        console.log("state7");
        //game.state.start("state1")
        
        addChangeStateEventListeners();
    },
    update: function(){}
};