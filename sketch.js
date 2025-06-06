xBolinha = 300;
yBolinha = 200;
diametro = 20;
velocidadexBolinha = 6;
velocidadeyBolinha = 6;

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
  
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
  
  if(xBolinha > width || xBolinha < 0)
  {
    velocidadexBolinha *= -1;
  }
  
  if(yBolinha > height || yBolinha < 0)
    {
     velocidadeyBolinha *= -1; 
    }
    
  
}   
