const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('holissssss');
})

app.listen(3000, function(){
    console.log('Escuchando puerto 3000');
})