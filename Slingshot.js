class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options)
        
       // this.image = loadImage("sprites/sling3.png")
       // this.image1 = loadImage("sprites/sling1.png")
       // this.image2 = loadImage("sprites/sling2.png")
        
        World.add(world, this.sling);


    }

    fly(){
        this.sling.bodyA = null;
    }

attach(bodyA){

this.sling.bodyA = bodyA;

}

    display(){

   // image(this.image2,170,20);
    //image(this.image1,200,20);
   
        if(this.sling.bodyA){


         

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            push();
            strokeWeight(4);
            stroke("blue")
         line(pointA.x, pointA.y, pointB.x, pointB.y);
           stroke(48,22,8);
          // line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
           //line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
           //image(this.image,pointA.x-20,pointA.y)

          
            pop();
        }
    }
    
}
