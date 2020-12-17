class Box {
  constructor(x, y, width, height) {
    var options = {
      
        'restitution':0.8,
        'friction':3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("box.png");
    this.visiblity = 255;
    World.add(world, this.body);
  }
  score () {
    if (this.visiblity<0 && this.visiblity >- 105) {
      score++
    }
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    if(this.body.speed < 3){
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill(255);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    }else {
      World.remove(world, this.body);
      push();
      this.visiblity = this.visiblity - 5;
      tint(255,this.visiblity);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
  }
};