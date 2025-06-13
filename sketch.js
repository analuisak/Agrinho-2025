let xBolinha = 30;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

let velocidade = 4;

// Obstáculos (carros)
let xCarro = [600, 600, 600];
let yCarro = [100, 200, 300];
let velocidadeCarro = [4, 6, 3];
let comprimentoCarro = 50;
let alturaCarro = 30;

let venceu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(100, 200, 100); // cor do campo
  desenhaCidade();
  mostraBolinha();
  movimentaBolinha();
  mostraCarros();
  movimentaCarros();
  verificaColisao();
  verificaVitoria();
  if (venceu) {
    mostraMensagemVitoria();
    noLoop();
  }
}

function desenhaCidade() {
  fill(150);
  rect(500, 0, 100, height); // cidade à direita
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text("CIDADE", 550, 30);
}

function mostraBolinha() {
  fill(255, 255, 0); // amarelo
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  if (keyIsDown(UP_ARROW)) {
    yBolinha -= velocidade;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yBolinha += velocidade;
  }
  if (keyIsDown(LEFT_ARROW)) {
    xBolinha -= velocidade;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xBolinha += velocidade;
  }
}

function mostraCarros() {
  fill(255, 0, 0); // vermelho
  for (let i = 0; i < xCarro.length; i++) {
    rect(xCarro[i], yCarro[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarros() {
  for (let i = 0; i < xCarro.length; i++) {
    xCarro[i] -= velocidadeCarro[i];
    if (xCarro[i] < -comprimentoCarro) {
      xCarro[i] = width;
    }
  }
}

function verificaColisao() {
  for (let i = 0; i < xCarro.length; i++) {
    let colisao = collideRectCircle(xCarro[i], yCarro[i], comprimentoCarro, alturaCarro, xBolinha, yBolinha, diametro);
    if (colisao) {
      xBolinha = 30;
      yBolinha = 200;
    }
  }
}

function verificaVitoria() {
  if (xBolinha + raio > 500) {
    venceu = true;
  }
}

function mostraMensagemVitoria() {
  background(0, 150, 255);
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text("Você chegou à cidade!", width / 2, height / 2);
}

// Função de colisão com retângulo (usando p5.collide2D)
function collideRectCircle(rx, ry, rw, rh, cx, cy, diameter) {
  let testX = cx;
  let testY = cy;

  if (cx < rx) testX = rx;
  else if (cx > rx + rw) testX = rx + rw;

  if (cy < ry) testY = ry;
  else if (cy > ry + rh) testY = ry + rh;

  let distX = cx - testX;
  let distY = cy - testY;
  let distance = sqrt((distX * distX) + (distY * distY));

  return distance <= diameter / 2;
}
