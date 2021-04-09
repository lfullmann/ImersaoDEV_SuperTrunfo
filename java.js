var cartaPaulo = {
  nome: "Seiya de Pegaso",
  imagem:
    "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
  atributos: {
    ataque: 80,
    defesa: 60,
    magia: 90,
  },
};

var cartaRafa = {
  nome: "Bulbasauro",
  imagem:
    "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
  atributos: {
    ataque: 70,
    defesa: 65,
    magia: 85,
  },
};

var cartaGui = {
  nome: "Lorde Darth Vader",
  imagem:
    "https://images-na.ssl-images-amazon.com/images/I/51VJBqMZVAL._SX328_BO1,204,203,200_.jpg",
  atributos: {
    ataque: 88,
    defesa: 62,
    magia: 90,
  },
};

var cartaLol = {
  nome: "Caitlyn",
  imagem:
    "http://1.bp.blogspot.com/-K7CbqWc1-p0/VLc98v85s0I/AAAAAAAABqk/-ZB684VVHbg/s1600/Caitlyn_OriginalSkin.jpg",
  atributos: {
    ataque: 95,
    defesa: 40,
    magia: 10,
  },
};

var cartaNaruto = {
  nome: "Naruto",
  imagem:
    "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
  atributos: {
    ataque: 80,
    defesa: 60,
    magia: 100,
  },
};

var cartaHarry = {
  nome: "Harry Potter",
  imagem:
    "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
  atributos: {
    ataque: 70,
    defesa: 50,
    magia: 95,
  },
};

var cartaBatman = {
  nome: "Batman",
  imagem:
    "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
  atributos: {
    ataque: 95,
    defesa: 70,
    magia: 0,
  },
};

var cartaMarvel = {
  nome: "Capitã Marvel",
  imagem:
    "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
  atributos: {
    ataque: 90,
    defesa: 80,
    magia: 0,
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
  var nome = '<p class= "carta-subtitle">${cartaJogador.nome}</p>';

  divCartaJogador.innerHTML = nome;
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
