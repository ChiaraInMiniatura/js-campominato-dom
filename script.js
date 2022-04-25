// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range: 
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// **Consigli del giorno:** :party_wizard:
// **** Creiamo prima una griglia unica (es con 100 quadratini) per  poi dinamicizzare il dato con classi css dedicate
// **** Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.

const container = document.querySelector(".container");
let bomba;
let livelloSc;

// selezione livelli

document.querySelector("#btn").addEventListener("click", init);
document.querySelector("#btn_azzera").addEventListener("click", azzera);

// chiamo funzioni
init();
Livello();
azzera();



// funzione di inizializzazione
function init(){
  
  for (let i = 1; i <= Livello(); i++) {
    
    const sq = creaQuadretto(container);
    // mettere i numeri nei quadretti
    sq.innerHTML = `<span> ${i} </span>`;

  }
  
  
}


// funzione crea quadretti
function creaQuadretto(target) {
  const sq= document.createElement("div");
  if (Livello() == 49) {
    sq.className = "square49";
  }else if (Livello() == 81) {
    sq.className = "square81";
  }else{
    sq.className = "square";
  }
  

  //accendi quadratino
  sq.addEventListener("click", clickedSq);
  
  target.append(sq);
  return sq    
  
}

// funzione per accendere i quadretti

function clickedSq(){
  console.log(this);
  this.classList.add("clicked");
}

// funzione livelli

function Livello(){
  livelloSc = livello.options[livello.selectedIndex].value;
  return livelloSc
}
console.log(livelloSc)
  
// funzione per azzerare

function azzera(){
  container.innerHTML = "";
}

// numero random
function numRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// funzione genera bombe
function generaBombe(min , max ){
  
  let arrayBombe = [];

  while(arrayBombe.length < 16){

    bomba = numRandom(1, Livello);

    if(!arrayBombe.includes(bomba)){

      arrayBombe.push(bomba);

    }

  }

  console.log(arrayBombe);
  return arrayBombe;
}

