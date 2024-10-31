//Esercitazione 1
// Dato il seguente array di oggetti 'notifiche'
// Scrivi una funzione gestisciNotifiche che:

// Accetti come parametri l’array notifiche e una callback.
// Filtri le notifiche in base al tipo specificato nella callback filtroTipo che filtra le notifiche in base al tipo "messaggio".
// Ordini le notifiche per data, dalla più recente alla più vecchia.
// Ritorni una lista formattata in cui ogni notifica mostra il nome dell’utente, il contenuto e la data.

//**Suggerimento: utilizza sort e il costrutto new Date per ordinare le notifiche per data**

const notifiche = [
    {
      utente: { nome: "Luca", email: "luca@example.com" },
      tipo: "messaggio",
      contenuto: "Hai un nuovo messaggio!",
      data: "2024-10-28",
    },
    {
      utente: { nome: "Anna", email: "anna@example.com" },
      tipo: "like",
      contenuto: "A qualcuno è piaciuto il tuo post!",
      data: "2024-10-27",
    },
    {
      utente: { nome: "Marco", email: "marco@example.com" },
      tipo: "commento",
      contenuto: "Hai un nuovo commento!",
      data: "2024-10-26",
    },
    {
        utente: { nome: "Sara", email: "sara@example.com" },
        tipo: "messaggio",
        contenuto: "Hai un nuovo messaggio!",
        data: "2024-11-4",
      },
  ];
  
//     function gestisciNotifiche(a, b){
//     const notificheFiltrate = a.filter(notifica => b(notifica.tipo));
//     notificheFiltrate.sort((a, b) => new Date (a.data) - new Date (b.data));
//     return notificheFiltrate.map(({utente: {nome, email}, contenuto, data}) => 
//     `${nome} ${contenuto} del ${data} `).join("")
  
//   };

//     const filtroTipo = tipo => tipo === "messaggio"

//     console.log(gestisciNotifiche(notifiche, filtroTipo))
  
  //Esercitazione 2
  // Dato il seguente array di oggetti 'feedbackAssistenza'
  // Scrivi una funzione analizzaFeedback che:
  
  // Accetti come parametri l’array feedbackAssistenza e una callback per filtrare i feedback in base alla categoria.
  // Filtri i feedback usando la callback per selezionare solo quelli di una specifica categoria.
  // Calcoli la valutazione media della categoria e ritorni una stringa riepilogativa che includa:
  // La categoria del feedback.
  // La valutazione media.
  // Un elenco dei commenti per quella categoria.
  
  const feedbackAssistenza = [
    {
      utente: { nome: "Luca", email: "luca@example.com" },
      categoria: "Tecnico",
      valutazione: 4,
      commento: "Ottimo supporto!",
    },
    {
      utente: { nome: "Anna", email: "anna@example.com" },
      categoria: "Commerciale",
      valutazione: 5,
      commento: "Molto soddisfatta",
    },
    {
      utente: { nome: "Marco", email: "marco@example.com" },
      categoria: "Tecnico",
      valutazione: 3,
      commento: "Problemi risolti, ma con ritardo",
    },
    {
      utente: { nome: "Sara", email: "sara@example.com" },
      categoria: "Logistica",
      valutazione: 4,
      commento: "",
    },
  ];

  // function analizzaFeedback(a, b){
  //   const feedbackfilter = a.filter(feedback => b(feedback.categoria));
  //   const mediaValutazione = feedbackfilter.reduce((acc, num) => acc + num.valutazione, 0) / feedbackAssistenza.length;
  //   return feedbackfilter.map(({utente: {nome, email}, categoria, valutazione, commento}) => 
  //   `${categoria}, ${commento}, ${mediaValutazione}`).join("")

  // }
  // const categoriaFilter = categoria => categoria === "Logistica"
  // console.log(analizzaFeedback(feedbackAssistenza, categoriaFilter))
  //Esercitazione 3
  //Dato il seguente array prenotazioniAuto
  // Scrivi una funzione gestisciPrenotazioni che:
  
  // Accetti come parametri l’array prenotazioniAuto e una callback.
  // La callback permette di specificare un filtro basato sul modello di auto (ad esempio, "SUV" o "Berlina").
  // Calcoli il costo totale del noleggio per ciascuna prenotazione in base ai giorni del periodo e alla tariffaGiornaliera.
  // Restituisca una lista formattata con nome del cliente, modello dell'auto e costo totale del noleggio, includendo gli optional.
  
  const prenotazioniAuto = [
    {
      cliente: {
        nome: "Luca",
        email: "luca@example.com",
        telefono: "1234567890",
      },
      auto: {
        modello: "SUV",
        tariffaGiornaliera: 50,
        optional: ["GPS", "Assicurazione"],
      },
      periodo: ["2024-10-01", "2024-10-05"],
    },
    {
      cliente: {
        nome: "Anna",
        email: "anna@example.com",
        telefono: "0987654321",
      },
      auto: {
        modello: "Berlina",
        tariffaGiornaliera: 40,
        optional: ["Assicurazione"],
      },
      periodo: ["2024-10-03", "2024-10-07"],
    },
  ];