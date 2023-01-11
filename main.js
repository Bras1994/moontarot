//bloques
let home = document.getElementById("home");
let espera = document.getElementById("loading");
let sectionCartas = document.getElementById("cartas");
let sectionResultado = document.getElementById("resultado");
let sectionMatch = document.getElementById("match");
let salir = document.getElementById("salir");
let partidasViejitas = document.getElementById("partidasAnt");
let listadoDePArtidas = document.getElementById("listadoDePArtidas");

//jugadores
//let nombre = document.getElementById('nombre')

//

let btnJugar = document.getElementById("jugar");
let cantidadDeCartas = 0;
let elegidas = [];
let nroCarta = [];

//modo de pantallas

espera.style.display = "none";
sectionCartas.style.display = "none";
sectionResultado.style.display = "none";
sectionMatch.style.display = "none";
listadoDePArtidas.style.display = "none";

//cartas seleccionadas
let pic00 = document.getElementById("pic00");
let pic01 = document.getElementById("pic01");
let pic02 = document.getElementById("pic02");
let pic03 = document.getElementById("pic03");
let pic04 = document.getElementById("pic04");
let pic05 = document.getElementById("pic05");

let tit00 = document.getElementById("tit00");
let tit01 = document.getElementById("tit01");
let tit02 = document.getElementById("tit02");
let tit03 = document.getElementById("tit03");
let tit04 = document.getElementById("tit04");
let tit05 = document.getElementById("tit05");

let txt00 = document.getElementById("txt00");
let txt01 = document.getElementById("txt01");
let txt02 = document.getElementById("txt02");
let txt03 = document.getElementById("txt03");
let txt04 = document.getElementById("txt04");
let txt05 = document.getElementById("txt05");

//jugadores

//Accionar Boton Jugar - Guarda los nombres, pasa a la pantalla de espera y luego abre la de cartas tiradas.

let mostrarResultados = () => {
  let jugadorUno = document.getElementById("jugador1").value;
  let jugadorDos = document.getElementById("jugador2").value;
  console.log(jugadorUno + " y " + jugadorDos);
  if (jugadorUno != "" && jugadorDos != "") {
    home.style.display = "none";
    listadoDePArtidas.style.display = "none";
    espera.style.display = "flex";
    setTimeout(() => {
      espera.style.display = "none";
      sectionCartas.style.display = "flex";
    }, 3000);
  } else {
    document.getElementById("mensaje").style.display = "flex";
    document.getElementById("mensaje").innerHTML =
      "Para continuar completa los nombres de quien quiere saber sus cartas..";
  }
};

btnJugar.addEventListener("click", function () {
  mostrarResultados();
});

let nroAleatorio = (e) => {
  console.log(e.target);
};

//Cartas seleccionadas

let dameRandom = (min, max) => {
  let random = Math.round(Math.random() * (max - min) + min);
  return random;
};

let tiradas = 0;
let resultado = [];
let partidasAnteriores = [];

let jugada = () => {
  let elegido = info[dameRandom(0, 21)];

  if (resultado.indexOf(elegido) == -1) {
    resultado.push(elegido);
    tiradas++;
  } else {
    console.log("Este fue repetido: " + elegido.nombre);
  }

  if (tiradas < 6) {
    jugada();
  } else {
    console.log(resultado, "somos el resultado");
    iterarRdos(resultado);
    rdoJugador1(resultado);
    rdoJugador2(resultado);
    nroCarta.push(resultado);
    console.log(nroCarta, "desde afuera");
  }
};

let iterarRdos = (juegoCompleto) => {
  pic00.setAttribute("src", juegoCompleto[0].img);
  pic01.setAttribute("src", juegoCompleto[1].img);
  pic02.setAttribute("src", juegoCompleto[2].img);
  pic03.setAttribute("src", juegoCompleto[3].img);
  pic04.setAttribute("src", juegoCompleto[4].img);
  pic05.setAttribute("src", juegoCompleto[5].img);
  tit00.innerHTML = juegoCompleto[0].nombre;
  tit01.innerHTML = juegoCompleto[1].nombre;
  tit02.innerHTML = juegoCompleto[2].nombre;
  tit03.innerHTML = juegoCompleto[3].nombre;
  tit04.innerHTML = juegoCompleto[4].nombre;
  tit05.innerHTML = juegoCompleto[5].nombre;
  txt00.innerHTML = juegoCompleto[0].descripcion;
  txt01.innerHTML = juegoCompleto[1].descripcion;
  txt02.innerHTML = juegoCompleto[2].descripcion;
  txt03.innerHTML = juegoCompleto[3].descripcion;
  txt04.innerHTML = juegoCompleto[4].descripcion;
  txt05.innerHTML = juegoCompleto[5].descripcion;
};

let pic000 = document.getElementById("pic000");
let pic001 = document.getElementById("pic001");
let pic002 = document.getElementById("pic002");
let pic003 = document.getElementById("pic003");
let pic004 = document.getElementById("pic004");
let pic005 = document.getElementById("pic005");

let rdoJugador1 = document.getElementById("rdo-jugador1");
let rdoJugador2 = document.getElementById("rdo-jugador2");

rdoJugador1 = (matcheo) => {
  pic000.setAttribute("src", matcheo[0].img);
  pic001.setAttribute("src", matcheo[1].img);
  pic002.setAttribute("src", matcheo[2].img);
};

rdoJugador2 = (matcheo) => {
  pic003.setAttribute("src", matcheo[3].img);
  pic004.setAttribute("src", matcheo[4].img);
  pic005.setAttribute("src", matcheo[5].img);
};


let resetAndPlay = (estado) => {
  tiradas = 0;
  resultado = [];
  if (estado == true) {
    jugada();
  }
};

//Cuando se aprieta el btnJugar genera la tirada de cartas y no antes
let ul = document.getElementById("partidasAnt");
let borrar = document.getElementsByClassName("input");

btnJugar.addEventListener("click", () => {
  jugada();
  partidaVieja();
});

let partidaVieja = () => {
  let jUno = document.getElementById("jugador1").value;
  let jDos = document.getElementById("jugador2").value;


  let ul = document.getElementById("partidasAnt");
  console.log(jUno, "cartas de jagador uno");
  console.log(jDos, "cartas de jagador dos");

  let li= `<li class="list-group-item">Partida de ${jUno} y ${jDos}= ${cartasanteriores} </li>`
  ul.innerHTML += li;
};

salir.addEventListener("click", () => {
  resetAndPlay();
  sectionResultado.style.display = "flex";
  sectionCartas.style.display = "none";
});

/*Botenes de Resultados*/

let volver = document.getElementById("volver");
let verMatch = document.getElementById("verMatch");

volver.addEventListener("click", () => {
  sectionResultado.style.display = "none";
  home.style.display = "flex";
  //listadoDePArtidas.style.display = "flex";
});

let jugadorUno = document.getElementById("jugador1").value;
let jugadorDos = document.getElementById("jugador2").value;

let nombrar1 = () => {
  let jugadorUno = document.getElementById("jugador1").value;
  let div = document.getElementById("detalle_name1");
  let txt1 = `<h3>Estas cartas son de: ${jugadorUno}</h3>`;

  div.innerHTML = txt1;
};

let nombrar2 = () => {
  let jugadorDos = document.getElementById("jugador2").value;
  let div = document.getElementById("detalle_name2");
  let txt2 = `<h3>Estas cartas son de: ${jugadorDos}</h3>`;

  div.innerHTML = txt2;
};

/*let compatibilidad = () => {
  let resultadoMatch = document.getElementById("resultadoMatch");
  if (match >= match * 2) {
    let txtComp = `<p>¡Son compatibles! 😄</p>`;
    resultadoMatch.innerHTML = txtComp;
    console.log(resultadoMatch);
  } else {
    let txtNeg = `<p>No son compatibles 😥 </p>`;
    resultadoMatch.innerHTML = txtNeg;
    console.log(resultadoMatch);
  }
};*/

verMatch.addEventListener("click", () => {
  sectionResultado.style.display = "none";
  sectionMatch.style.display = "flex";

  nombrar1();
  nombrar2();
  //compatibilidad();
});

let volver2 = document.getElementById("volver2");

volver2.addEventListener("click", () => {
  home.style.display = "flex";
  sectionMatch.style.display = "none";
});


