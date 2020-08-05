class Box {
    constructor(x, y, width, height) {
     
      var options = {
        'restitution':0.2,
        'friction':0.2,
        'density':1.2
    }
    this.image = loadImage("black.png");
    this.Visiblity = 255;
    
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
      }
      
         
          
        display(){
          var angle = this.body.angle;
         
          if(this.body.speed<4){
            
            var angle = this.body.angle;
            // fill("brown");
            // rectMode(CENTER);
            // rect(this.body.position.x, this.body.position.y, this.width, this.height);
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
          }
          else{
            World.remove(world, this.body);
           push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 30,40);
            //console.log(tint);
            pop();


      
      
          }
          
         
        }
     score(){
       if (this.Visiblity<0 && this.Visiblity> -105){
         scores++;
       }
     }

  }
       
       
      
    