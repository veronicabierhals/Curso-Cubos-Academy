let personagem
let grama
let tam = 64

let andarX = 0
let andarY = 0

let botao = 0

//executado uma vez quando o programa é iniciado
function setup() {
  createCanvas(576, 576);
  personagem = loadImage('menina.png')
  grama = loadImage('grama.png')
}

//fica executando até o programa ser encerrado
function draw() {
  background(220); // pinta o que está sendo exibido, de preto(0) a branco(255), rgb ou uma cor só
  if(andarX < 0){
    andarX = 0
  }
  if(andarY < 0){
    andarY = 0
  }
  if(andarX > tam*8){
    andarX = tam*8
  }
  if(andarY > tam*8){
    andarY = tam*8
  }
  
  for(let x = 0; x < 9; x++){ //variável inicia em zero e repete 9x, incrementa de 1em1
    for(let y = 0; y < 9; y++) {
      image(grama, x*tam, y*tam, tam, tam) //local no eixo x, y, tam, tam
  }
}

  image(personagem, andarX, andarY, tam, tam) //local e tamanho
  
  if (andarX === tam*8 && andarY === tam*8){
    //criar retangulo
    rect(160,160, 256, 256)
    // excrever texto 'ganhou'
    textSize(35)
    text('GANHOU', 200, 300)
    //criar um botão
    botao = createButton('Reiniciar')
    //resetar o jogo
    botao.mousePressed(reset)
    //parar jogo
    noLoop()
  }
    
}

function reset(){
  andarX = 0
  andarY = 0
  botao.remove() // remove o botão reiniciar
  loop() // volta a executar o programa
}

//é executado uma vez, toda vez que há um evento de teclado
function keyPressed(){ // captura todos os movimentos de teclado
  if(keyIsDown(DOWN_ARROW)){
    andarY += 64
  }
  if(keyIsDown(UP_ARROW)){
    andarY -= 64
  }
  if(keyIsDown(LEFT_ARROW)){
    andarX -= 64
  }
  if(keyIsDown(RIGHT_ARROW)){
    andarX += 64
  }
}