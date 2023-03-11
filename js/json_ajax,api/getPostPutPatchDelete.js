// get - pobieranie danych
// post - wysyłanie danych
// put, patch - edycja danych
// delate - usuwanie danych


const test = {
    method: 'POST'
}
fetch(url, test)


// lub wykorsztanie GET w taki sposób:
fetch(url, {
    method: 'GET'
})