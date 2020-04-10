class Form {
    constructor(){
        this.input=createInput("identify yourself");
        this.button=createButton('Play');
        this.greeting=createElement('h2');
        this.title=createtElement('h2');
    }

    hide(){
        this.button.hide();
        this.input.hide();
    }
    
    display() {
        this.title.html("Slaughter Race");
        this.title.position(30,250);
        this.input.position(250,250);
        this.greeting.position(250,250);
        this.button.position(250,280);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("hey," + player.name + "mkae sure u don't lose");
            this.greeting.position(250,100);
        });

        
    } 
}