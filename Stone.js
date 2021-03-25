class Stone {
    constructor(x, y, width, height) {
      var options = {
        'density':12,
        'friction': 0.9,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      var pos=this.body.position;
      var angle=this.body.angle;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.width,this.height);
			pop()
    };
  };
  