class Mango{
    constructor(x,y,radius){
        var options={
            isStatic : true,
            'restitution': 0,
            'friction' :1,
       }
       this.body = Bodies.circle(x, y, radius,options);
       this.radius = this.radius;
       this.image = loadImage("mango.png")
       
       World.add(world, this.body);
     }
     display(){
       var pos =this.body.position;
       push()
       translate(pos.x,pos.y)
       imageMode(CENTER);
       fill("yellow");
       image(this.image,0,0,50,50)
       pop();
     }
   
}