class Polygon {
    constructor(x,y,r) {
      var options = {
          isStatic: false
         // density:0.5
      }
     this.body = Bodies.circle(x,y,r);
     // this.width = width;
      //this.height = height;
      this.x = x;
      this.y = y;
      this.r = r;

     //this.image = loadImage("polygon.png");

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      push();
      imageMode(CENTER)
      translate(pos.x,pos.y)

      image(this.image,0,0, this.width, this.height);
      pop()
    }
  }
