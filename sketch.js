let campoIdade;
let campoTerror;
let campoSuspense;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("14");
  campoTerror = createCheckbox("Gosta de Terror Psicológico?");
  campoSuspense = createCheckbox("Gosta de Suspense?");
}

function draw() {
  background("lightblue");
  let idade = campoIdade.value();
  let gostaDeTerror = campoTerror.checked();
  let gostaDeSuspense = campoSuspense.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeTerror, gostaDeSuspense);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeTerror, gostaDeSuspense) {
  if (idade >= 14) {
    if (idade >= 16) {
      return "Jogos mortais";
    } else {
      if (idade >= 18) {
        if (gostaDeTerror || gostaDeSuspense) {
          return "A Morte do Demônio: A Ascensão";
        } else {
          return "Doce Vingança";
        }
      } else {
        if (gostaDeTerror) {
          return "A Ilha do Medo";
        } else {
          return "Corra";
        }
      }
    }
  } else {
    if (gostaDeSuspense) {
      return "Cisne Negro";
    } else {
      return "O Telefone Preto";
    }
  }
}
