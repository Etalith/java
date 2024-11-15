const titolo = document.getElementsByTagName("h1");
console.log(titolo[0]);
const lista = document.querySelectorAll("li");
console.log(lista);

// [li, li, li, li]
// const listanuova = [...lista]
const listafiltrata = Array.from(lista).filter((x, i) => i % 2 === 0);
console.log(listafiltrata);