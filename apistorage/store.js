async function prodotti(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        const griglia = document.getElementById("contenitore-prodotti")

        if(!response.ok){
            console.error(error)
            return
        }

        data.forEach(element => {
            const prodotti = creacard(element)
            griglia.appendChild(prodotti)
        });        
    } catch (error) {
        console.error(error);
    }
}

function creacard(obj) {
    const div = document.createElement("div")
    const img = document.createElement("img")
    const titolo = document.createElement("h3")
    const descrizione = document.createElement("p")
    const prezzo = document.createElement("p")
    const acquista = document.createElement("button")
    const preferiti = document.createElement("button")

    div.classList.add("box")
    img.classList.add("box-img")
    acquista.classList.add("bottone-acquisti")
    preferiti.classList.add("bottone-pref")
    prezzo.classList.add("prezzo")
    titolo.classList.add("titolo")
    descrizione.classList.add("descrizione")

    img.src = obj.image
    img.alt = obj.title
    titolo.innerText = obj.title
    descrizione.innerText = obj.description
    prezzo.innerText = obj.price
    acquista.innerText = "🛒Acquista"
    preferiti.innerText = "❤️Preferiti"

    div.appendChild(img)
    div.appendChild(titolo)
    div.appendChild(descrizione)
    div.appendChild(prezzo)
    div.appendChild(acquista)
    div.appendChild(preferiti)

    return div

}

prodotti("https://fakestoreapi.com/products")