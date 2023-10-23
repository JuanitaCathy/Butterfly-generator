var yoff = 0;
function setup() {
  createCanvas(400, 350);
}

function draw() {
  background(51);
  translate(width / 2, height / 2);
  //rotate(PI / 2);

  stroke(random(255));
  fill(255, 50);
  strokeWeight(1);

  var dangle = PI / 150;
  var dx = 0.16;



  randomSeed(noise(150) * 150);
  for (var i = 10; i > 0; i--) {
    fill(random(255), random(255), random(255));
    r *= i / 10;
  }

  var xoff = 0;
  beginShape();
  for (var a = 0; a <= TWO_PI; a += dangle) {
    var n = noise(xoff, yoff);
    var r = sin(2 * a) * map(n, 0, 1, 50, 200);
    var x = sin(yoff) * r * cos(a);
    var y = r * sin(a);
    if(a < PI){
      xoff += dx;
    }else{
      xoff -= dx;
    }
    vertex(x, y);
  }
  endShape();

  yoff += 0.01;

}

