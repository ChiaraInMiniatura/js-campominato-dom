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

// 

// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).
// ****L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// **BONUS:**
// 1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// ****2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
// **Consigli del giorno:** :party_wizard:
// ****Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.

