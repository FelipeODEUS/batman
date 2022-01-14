class Chuva{
    constructor(x,y){
        this.rain = Bodies.circle(x,y,5,options)   
        }
        var MaxDrops = 100;


        for(var i = 0; i < MaxDrops; i++){
            MaxDrops.push(new createDrop(random(0,400), random(0,400)));
        }
    }
