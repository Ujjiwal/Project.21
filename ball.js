class Ball {
    constructor(x,y,radius){
        var ball_options ={
            isStatic:false,
            restitution:0.2,
            friction:0.3,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,ball_options);
        this.radius = radius
    
        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(this.body.position.x,this.body.position.y,this.radius);
    }
    }