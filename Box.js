class Box{
    constructor(x,y){
        var options = {
            'isStatic' : false
        }
        this.body = Bodies.rectangle(x,y,40,40,options);
        this.width = 40;
        this.height = 40;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle  = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER);
        fill(255,0,0);
        strokeWeight(3);
        stroke(0);
        rect (0,0,this.width,this.height);
        pop();
    }
}