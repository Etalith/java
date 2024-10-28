const ordini = [
    {utente: 
        {nome: "Sara", 
        email: "sara123@gmail.com", 
        indirizzo: "via delle foglie 12"},
        prodotti: [
            {nomeProdotto: "frullatore",
            quantita: 12, prezzo: 30},
            {nomeProdotto: "pentola",
                quantita: 8, prezzo: 25}]}
];

function sommarioOrdini(a){
    const {utente: {nome, email, indirizzo}, prodotti} = a;
    console.log(`${nome} ha acquistato: `);
    const prezzoTotale = prodotti.map(({quantita, prezzo, nomeProdotto}) => {
        const totale = quantita * prezzo;
        console.log(`${quantita} di ${nomeProdotto} per un totale di ${totale}€`)
    return totale})
    const totaleOrdine = prezzoTotale.reduce((acc, cur) => acc + cur, 0);
    console.log(`per un totale di ${totaleOrdine}€`);
    return totaleOrdine;
}
(sommarioOrdini(ordini[0]))
