class Paper{
    constructor(x,y,radius){

      var options = {
          isStatic:false,
          restituion:0.3,
          friction:0.5,
          density:0.2
      }

      this.body = Matter.Bodies.circle(x,y,radius,options);
      this.radius = radius;

      World.add(world,this.body);
      console.log(this.body.position);
    }

    display(){

        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        fill("white");
        ellipse(0,0,this.radius,this.radius);
        pop();           
}
}
