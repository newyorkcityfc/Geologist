class Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 5,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;		
              push()
              translate(pos.x, pos.y);
              rotate(angle);
              rectMode(CENTER)
              
              fill("brown");
              //draw the ellipse here to display the rubber ball
              rect(0,0,this.width,this.height);
              pop()
    };
  };
  