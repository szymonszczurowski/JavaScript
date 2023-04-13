const http = require('http');
const url = require('url');

http.createServer(
    function(req, res){
        res.writeHead(200, {'Content-type': 'text/html'})
        res.write('req.url:' + req.url + "<br>")
        const parsedUrl = url.parse(req.url, true)

        res.write('parsedUrl.pathname: ' + parsedUrl.pathname + '<br>')

        res.write('parsedUrl.query' + JSON.stringify(parsedUrl.query)  + '<br>')

        if(parsedUrl.query.arg2) res.write('parsedUrl.query.arg2:' + parsedUrl.query.arg2)

        res.end()
    }
).listen(8080)