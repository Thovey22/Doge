class Doge{

constructor(img){
this.img = img;
this.pos = createVector(random(width), random(height));
this.scale = random(0.5) + 0.1;
this.index = 1;
}

render(){
push();

imageMode(CENTER);
translate(this.pos.x,this.pos.y);
scale(this.scale);
rotate(PI/50 * this.index);
image(img,0, 0);
this.index++;
pop();

}


}
