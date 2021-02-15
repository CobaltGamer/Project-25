class Ground {
    constructor () {
        var option = {
            isStatic: true
          }
        this.ground = Bodies.rectangle(400,690,800,20, option);
        World.add(world, this.ground);
          

    }

    display () {
        var pos = this.ground.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,800,20);
    }

}