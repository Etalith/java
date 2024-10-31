// 🍂🎃👻 A Scary Story 🍂🎃👻

// Creiamo una storia horror interattiva in cui diversi personaggi esplorano una casa infestata. 👻
// Ogni pochi secondi, si verificherà un evento spaventoso o un colpo di scena che influenzerà il coraggio dei personaggi.🔪
// L’obiettivo è far fuggire i personaggi dalla casa o vederli intrappolati al suo interno se perdono troppo coraggio.😱

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
