constructor(x,y,width,height){
    var options = {
        restitution :0.4,
        friction :1.0,
        //isStatic:ture
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
}

display(){
    var angle = this.body.angle;
    var pos = this.body.postion;
    Push();
    translate(pos.x,pos.y);
    rotate(angle);
    reactMode(center);
    rect(0,0,this.width,this.height);
    pop();                                                                                          
}
}