const errors = require('./src/printError')

var bodyParser = require('body-parser');
var helmet = require('helmet');
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    port = 8080;

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/"AcreditacionTEC"'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', (req, res) => {    
    res.send(errors.html);
})
app.post('/', (req, res) => {    
    res.send(errors.html);
})
app.put('/', (req, res) => {    
    res.send(errors.html);
})
app.delete('/', (req, res) => {    
    res.send(errors.html);
})

server.listen(port, function() {
    console.log('Servidor escuchando en el puerto: ' + port);
});