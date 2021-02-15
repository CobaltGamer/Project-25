class Dustbin {
    constructor (x,y,width,height) {
        this.box = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world,this.box)
        
    }
    display() {
        var pos = this.box.position;
        var angle = this.box.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        angleMode(RADIANS);
        rectMode(CENTER);
        fill("green"); 
        rect(0,0,this.width,this.height);
        pop(); 
        
    }

}
