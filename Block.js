class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.visiblity = 225;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        
        if(this.body.speed>3){
          World.remove(world, this.body);
          tint(255, this.visiblity);
          rect(0,0,this.width, this.height);
          this.visibility=this.visiblity-5;
        }
        pop();
    }
}