class Paper {
    constructor (x,y,radius) {
        this.Paper = Bodies.circle(x,y,radius/2);
        this.radius = radius;
        World.add(world,this.Paper)
        
    }
    display() {
        var pos = this.Paper.position;
        var angle = this.Paper.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        angleMode(RADIANS);
        ellipseMode(RADIUS);
        fill("green"); 
        ellipse(0,0,this.radius,this.radius);
        pop(); 
        
    }

}
