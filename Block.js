class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
        //  density:0.2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("ibox.jpg")
      this.visibility = 255;
      World.add(world, this.body);
    }


score(){

if(this.visibility < 0 && this.visibility > -50){


score++;



}




}



    display(){

      //console.log(this.body.speed);

      if (this.body.speed<4){
        push();
      var pos =this.body.position;
      strokeWeight(3)
      rectMode(CENTER);
     fill("white");
     //translate(pos.x,pos.y)

     image(this.image,pos.x,pos.y, this.width, this.height);
    }

    else{
   World.remove(world,this.body);
 
   this.visibility = this.visibility - 5;
   tint(255,this.visibility);
   //var pos =this.body.position;
   image(this.image,this.body.position.x,this.body.position.y, this.width, this.height);
pop();


    }

  }
  }
