class hexagon {
    constructor(x,y,width,height){
        var options ={
            isStatic: false,
            restitution: 0.6,
            friction: 0.8,
            density: 0.5            
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      //this.image = loadImage("hexagon2.png");
      World.add(world, this.body);
      
    }
    display(){
           //var pos =this.body.position;
          //  this.body.position.x = mouseX;
          //  this.body.position.y = mouseY;
      rectMode(CENTER);
      //fill("white");
      rect(this.body.position.x, this.body.position.y, this.width, this.height );
    }

}
