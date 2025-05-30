xBolinha = 300;
yBolinha = 200;
diametro = 20;
velocidadeBolinha = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(33);
  actorBolinha();
}

function actorBolinha()
{
  circle(xBolinha, yBolinha, diametro);
  
  xBolinha += velocidadeBolinha;
  yBolinha += velocidadeBolinha;
}
