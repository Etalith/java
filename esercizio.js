// 1. Scrivi una funzione chiamata 'generaComplimento' che generi complimenti casuali. La funzione deve accettare il nome di una persona come parametro e generare un complimento casuale basato su una selezione randomica. (Usa Math.random() per generare un numero casuale compreso tra 1 e 7.)
// 2. La funzione deve fare uso di un costrutto switch per selezionare il complimento.(Utilizza un switch per selezionare un complimento in base al numero casuale generato. Il complimento DEVE includere il nome passato come parametro)
// 3. AGGIUNGERE un messaggio speciale per chi si chiama "Mario" utilizzando l'operatore ternario
// 4. Stampa il complimento generato nella console.

//Bonus: Ci sono altri modi per fare la stessa operazione che non sia switch? Come?


function generaComplimento(a){
    let numero = Math.floor(Math.random() * 7) + 1
    let complimento = ""
    switch (numero){
        case 1:
            complimento = a + " " + "hai dei capelli lisci";
            break;
        case 2:
            complimento = a + " sei molto gentile";
            break;
        case 3:
            complimento = a + " corri molto velocemente";
            break;
        case 4:
            complimento = a + " sei una persona molto positiva";
            break;
        case 5:
            complimento = a + " sei una persona molto solare";
            break;
        case 6:
            complimento = a + " hai dei occhi bellissimi";
            break;
        case 7:
            complimento = a + " sei molto determinato";
            break;
        default:
            complimento = a + " non ti meriti niente";
            break;
    }

    complimento += a.toLowerCase() === "mario" ? " inoltre chi si chiama Mario ha sempre una marcia in più" : ""
    
    console.log(complimento.toUpperCase())
}

generaComplimento("Francesca")
generaComplimento("Luca")
generaComplimento("Mario")