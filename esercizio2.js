// Creiamo un genera storie randomico

// 1. Definisci tre funzioni per scegliere casualmente un nome, un'azione e un luogo:
// scegliNome: Deve restituire un nome casuale tra cinque opzioni (ad esempio "Alice", "Mario", "Giovanni", "Luca", "Elena")
// scegliAzione: Deve restituire un'azione casuale tra cinque opzioni (ad esempio "mangia", "corre", "gioca", "legge", "disegna")
// scegliLuogo: Deve restituire un luogo casuale tra cinque opzioni (ad esempio "nel parco", "al mare", "in montagna", "in biblioteca", "a scuola")
// Queste funzioni devono generare un numero casuale e restituire un risultato in base a quel numero (utilizza il metodo che preferisci)

//2. Crea la funzione principale chiamata generaStoria che coordini la creazione della storia. La funzione deve usare un ciclo per generare 3 frasi casuali che combinano un nome, un'azione, e un luogo
// All'interno della funzione principale generaStoria, invoca le funzioni secondarie per ottenere un nome, un'azione e un luogo, combinandoli in una frase che descrive la scena

//3. Ogni frase generata deve essere stampata in console

//BONUS: Crea una arrow function chiamata commentoSimpatico, che restituisca un commento casuale tra cinque opzioni (ad esempio "Che giornata incredibile!", "Davvero un'avventura!", "Non ci posso credere!", ecc.) Anche qui, usa un numero casuale per scegliere il commento

function scegliNome(){
    let nome = Math.floor(Math.random() * 5)+ 1
    switch (nome){
        case 1:
            return "Alice ";
        case 2:
            return "Mario ";
        case 3:
            return "Giovanni ";
        case 4:
            return "Luca ";
        case 5:
            return "Elena "; 
    }
}

function scegliAzione(){
    let azione = Math.floor(Math.random() * 5)+ 1
    switch (azione){
        case 1:
            return "mangia ";
        case 2:
            return "corre ";
        case 3:
            return "gioca ";
        case 4:
            return "legge ";  
        case 5:
            return "disegna ";
    }
} 

function scegliLuogo(){
    let luogo = Math.floor(Math.random() * 5)+ 1
    switch (luogo){
        case 1:
            return "nel parco, ";
        case 2:
            return "al mare, ";  
        case 3:
            return "in montagna, ";
        case 4:
            return "in biblioteca, ";
        case 5:
            return "a scuola, ";
    }
}  

function generaStoria(a, b){
    for (let i=0; i< a; i++){
        let nome = scegliNome()
        let azione = scegliAzione()
        let luogo = scegliLuogo()
        let commento = commentoSimpatico()
        console.log(nome + azione + luogo + commento + b.toUpperCase())
    }
}

const commentoSimpatico = () => {
    let commento = Math.floor(Math.random() * 3) + 1;
    if (commento === 1){
        return "che giornata incredibile!";
    } else if (commento === 2){
        return "davvero un'avventura!";
    } else if (commento === 3){
        return "non ci posso credere!";
    } else if (commento === 4){
        return "completamente fuori dalla realtà!";
    } else{
        return "impossibile!";
    }
}

generaStoria(6, " the end")