const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('holi');
})

app.listen(3000, function(){
    console.log('Escuchando puerto 3000');
})