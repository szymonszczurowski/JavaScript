// const http = require('http'); // dodanie moduły http potrzengo do działaaia serwera

http.createServer(
    function(req, res){ // funkcje obsługujące zapytania i zwracająca odpowiedź
        res.writeHead(200, {'Content-type': 'text/html'}) // zwraca kos status 200
        res.end('Hello World') // zwracanie inforamcji z serwera i zakończenia odpowiedzi
    }
).listen(8080) // serwer dostępny na porcie 8080


// LUB

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-type': 'text/html'})
//     res.end('Hello World2')
// });

// server.listen(8080, () => {
//     console.log('Server listening on port 8080');
// });


// WYWOŁANIE node01.js