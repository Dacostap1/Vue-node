const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('tiny'));
app.use(cors());

app.get('/', function(req, res){
    res.send('holissssss');
})

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function(){
    console.log('Escuchando puerto: ', app.get('puerto'));
})