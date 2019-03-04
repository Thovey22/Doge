
let img;
let doges = [];
function preload(){
  img = loadImage('doge.jpg');

}
function setup() {
createCanvas(windowWidth,windowHeight);
for (var i = 0; i < 100; i++){
doges.push (new Doge(img));
}
}

let index = 1;
function draw() {
  background(100);
for (doge of doges){
  doge.render();
}
}
