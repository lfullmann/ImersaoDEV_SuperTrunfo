var cartaPaulo = {
  nome: "Seiya de Pegaso",
  imagem:
    "https://cdna.artstation.com/p/assets/images/images/018/537/804/large/joao-pedro-calheiros-miranda-dos-santos-seiya-site-reduzido.jpg?1559751054",
  atributos: {
    ataque: 80,
    defesa: 60,
    magia: 90,
  },
};

var cartaRafa = {
  nome: "Bulbasauro",
  imagem:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F675891856546435874%2F&psig=AOvVaw2I-x0dThaxnCFNIGCPUv7F&ust=1618097062129000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiBiryn8u8CFQAAAAAdAAAAABAD",
  atributos: {
    ataque: 70,
    defesa: 65,
    magia: 85,
  },
};

var cartaGui = {
  nome: "Lorde Darth Vader",
  imagem:
    "https://i.pinimg.com/originals/b0/9f/89/b09f89629472cad0f1d55fbde0836c2b.jpg",
  atributos: {
    ataque: 88,
    defesa: 62,
    magia: 90,
  },
};

var cartaMaquina;
var cartaJogador;
var cartas = [cartaPaulo, cartaRafa, cartaGui];

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirOpcoes();
}

function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = "url(${cartaJogador.imagem})";
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    alert("Venceu a carta máquina");
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    alert("Perdeu. Carta da máquina é maior");
  } else {
    alert("Empatou!");
  }
  console.log(cartaMaquina);
}
