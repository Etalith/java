// 🍂🎃👻 A Scary Story 🍂🎃👻

// Creiamo una storia horror interattiva in cui diversi personaggi esplorano una casa infestata. 👻
// Ogni pochi secondi, si verificherà un evento spaventoso o un colpo di scena che influenzerà il coraggio dei personaggi.🔪
// L’obiettivo è far fuggire i personaggi dalla casa o vederli intrappolati al suo interno se perdono troppo coraggio.😱

// Array di Personaggi:

// Creare un array di oggetti, dove ogni oggetto rappresenta un personaggio che esplora la casa infestata.
// Ogni personaggio ha:
// nome: il nome del personaggio (es. “Alice”, “Bob”).
// coraggio: un valore iniziale tra 4 e 7, che rappresenta il coraggio del personaggio.
// salvo: una proprietà booleana (false all’inizio) che indicherà se il personaggio è fuggito.

// Funzione di Generazione della Storia:
// Ogni pochi secondi, un evento casuale (una “spavento” 🥶 o un “colpo di scena” 🦇) accade e modifica il coraggio del personaggio, aumentando o diminuendo il suo valore.
// Se il coraggio di un personaggio scende troppo (2 o meno), il personaggio rimane intrappolato nella casa.
// Se il coraggio raggiunge una soglia superiore (8 o più), il personaggio riesce a fuggire.

// Termine della Storia:
// La storia termina dopo 15 secondi, oppure se tutti i personaggi sono fuggiti o intrappolati.
// Viene visualizzata una descrizione finale in cui si indica chi è riuscito a scappare e chi è rimasto intrappolato nella casa.

// Vediamo come fare.. 😈
// Creiamo l’array dei personaggi:
// Definisci un array chiamato personaggi, che conterrà vari oggetti. Ogni oggetto ha le proprietà:
// nome: stringa con il nome del personaggio.
// coraggio: un numero tra 4 e 7, che rappresenta la quantità iniziale di coraggio del personaggio.
// salvo: inizialmente false, diventerà true quando il personaggio fugge.

// Scrivi una funzione eventoSpaventoso(personaggio):
// Questa funzione rappresenta un evento spaventoso o un colpo di scena che accade a un personaggio.

// Ogni evento ha un impatto sul coraggio:
// Con una probabilità del 60%, il personaggio perde coraggio (-2 punti).☠️
// Con una probabilità del 40%, il personaggio guadagna coraggio (+2 punti).⚔️
// Aggiorna la proprietà coraggio del personaggio e stampa in console una frase che descrive l'evento e il nuovo valore di coraggio.

// 🤫Suggerimento: Usa un array di frasi spaventose come “un fantasma appare dal nulla”, “una porta si chiude con un colpo”, e seleziona una frase casuale per ogni evento.

// Aggiungi condizioni di intrappolamento e fuga:
// All'interno della funzione eventoSpaventoso, aggiungi delle condizioni per verificare se il personaggio è troppo spaventato o trova il coraggio per fuggire:
// Se coraggio <= 2, stampa un messaggio in cui si dice che il personaggio è troppo spaventato e rimane intrappolato nella casa. Imposta salvo su null.
// Se coraggio >= 8 e salvo è ancora false, stampa un messaggio che descrive la fuga del personaggio e imposta salvo su true.

// 🤫Suggerimento: La proprietà salvo ha tre stati: false (all’inizio), true (quando scappa) e null (quando rimane intrappolato).

// Scrivi la funzione iniziaStoria():
// Stampa un messaggio di inizio della storia.
// Usa setInterval per creare un evento ogni 3 secondi, chiamando eventoSpaventoso per ogni personaggio:
// Ogni 3 secondi, verifica se il personaggio ha salvo === false, e applica l’evento spaventoso solo in questo caso.
// Verifica alla fine di ogni intervallo se:
// Tutti i personaggi sono fuggiti (hanno salvo: true), o
// Tutti i personaggi sono intrappolati (hanno salvo: null).
// Se uno di questi casi è verificato, ferma l'intervallo con clearInterval e chiama la funzione mostraEsitoFinale().

// 🤫Suggerimento: Usa every per verificare se tutti i personaggi hanno salvo: true o salvo: null.

// Termina la storia dopo 15 secondi:
// Aggiungi un setTimeout nella funzione iniziaStoria per fermare la storia dopo 15 secondi (indipendentemente dal fatto che tutti siano scappati o intrappolati).

// ✨BONUS: Alla fine di setTimeout, chiama mostraEsitoFinale().
// Crea la funzione mostraEsitoFinale():
// Questa funzione deve mostrare il risultato finale della storia:
// Se tuttiFuggiti è true, stampa “Tutti i personaggi sono riusciti a fuggire dalla casa infestata.”
// Se tuttiIntrappolati è true, stampa “Tutti i personaggi sono rimasti intrappolati nella casa per sempre…”
// Altrimenti, elenca i personaggi uno ad uno con il loro risultato (salvo: true o salvo: null).

// 🤫Suggerimento: Puoi chiamare questa funzione con due parametri (tuttiFuggiti e tuttiIntrappolati), passati da iniziaStoria, per determinare direttamente la condizione di fine.

const personaggi = [{
    nome: "Alice",
    sesso: "F",
    coraggio: 5, 
    salvo: false,
    },
    {
    nome: "Bob",
    sesso: "M",
    coraggio: 7, 
    salvo: false,
    },
    {
    nome: "Fred",
    sesso: "M",
    coraggio: 6, 
    salvo: false,
    },
    {
    nome: "Shaggy",
    sesso: "M",
    coraggio: 4, 
    salvo: false,
    },

];

function eventoSpaventoso(a){
    const eventi = ["Un fantasma appare dal nulla", "Una porta si chiude con un colpo", "Una risata malefica dal piano superiore", "Del sangue esce dal lavello", "Qualcuno bussa dall'armadio", "Una voce sussurra il suo nome"];
    const valoreCasuale = Math.random() < 0.6 ? -2 : +2;
    const eventoCasuale = eventi[Math.floor(Math.random() * eventi.length)];
    a.coraggio += valoreCasuale;
    if (valoreCasuale < 0){
        if (a.sesso === "M"){
        console.log(`${eventoCasuale}, ${a.nome} scappa impaurito. Coraggio attuale: ${a.coraggio}`);
        } else if (a.sesso === "F"){
        console.log(`${eventoCasuale}, ${a.nome} scappa impaurita. Coraggio attuale: ${a.coraggio}`);
        };
    }  else {
        console.log(`${eventoCasuale}, ${a.nome} non si fa spaventare così facilmente. Coraggio attuale ${a.coraggio}`);
    };

    if (a.coraggio <= 2 && a.salvo === false){
        if (a.sesso === "M"){
        a.salvo = null;
        console.log(`${a.nome} si è perso nella casa correndo via spaventato. Rimane intrappolato nella casa.`);
        } else if (a.sesso === "F"){
        a.salvo = null;
        console.log(`${a.nome} si è persa nella casa correndo via spaventata. Rimane intrappolata nella casa.`);
        };
    } else if (a.coraggio === 3 || a.coraggio === 4){
        console.log(`${a.nome} senta il suo coraggio che si sta affievolendo.`);
    } else if (a.coraggio === 6 || a.coraggio === 7){
        if (a.sesso === "M"){
        console.log(`${a.nome} è più coraggioso che mai.`);
        } else if (a.sesso === "F")
            console.log(`${a.nome} è più coraggiosa che mai.`); 
    } else if (a.coraggio >= 8 && a.salvo === false){
        a.salvo = true
        console.log(`${a.nome} ha trovato la porta per fuggire, che fortuna!`);
        };
};

function iniziaStoria(){
    console.log("Che la storia abbaia inizio...");
    const id = setInterval(() => {
        personaggi.forEach((a) => {
            eventoSpaventoso(a);
        });
        const intrappolati = personaggi.every(a => a.salvo === null);
        const fuggiti = personaggi.every(a => a.salvo === true);
        if (intrappolati || fuggiti){
            clearInterval(id);
            mostraEsitoFinale(fuggiti, intrappolati);
        };
    }, 3000);
    setTimeout(() => {
        clearInterval(id);
        mostraEsitoFinale();
    }, 15000);
    
    
};

function mostraEsitoFinale(a, b){
    console.log("la storia è terminata.")
    if (a){
        console.log("Tutti i personaggi sono rimasti intrappolati dalla casa infestata.")
    } else if (b){
        console.log("Tutti i personaggi sono riusciti a fuggire dalla casa infestata.")
    } else {
        personaggi.forEach((personaggio) => {
            if (personaggio.salvo === true){
                console.log(`${personaggio.nome} è riuscito a fuggire, EVVIVA!`);
            } else if (personaggio.salvo === null || personaggio.salvo === false){
                console.log(`${personaggio.nome} è rimasto nella casa, Che peccato`);
            }
        })
    }
}

iniziaStoria()
