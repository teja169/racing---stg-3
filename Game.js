class Game{
    constructor(){}

    getState(){

        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })

    }

    update(state){
        dataBase.ref('/').update({
            gameState: state
        });
    }

    async start(){
        if(gameState === 0){
            player = new player();
            var playerCountRef=await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCOunt=playerCountRef.val();
                player.getCount();
            }
            form=new Form;
            form.display();
        }
    }

    play(){
        form.hide();
        textSize(30);
        text("Start Game",250,250);
        player.getPlayerInfo();
        if(allPlayers!== undefined){
            var display_position=130;
            display_position+=20;
            textSize(25);
            text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,display_position);
        }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null) {
        player.distance+=50;
        player.update();

    }
}
