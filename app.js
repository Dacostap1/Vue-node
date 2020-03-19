const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/myapp';
const options = {useNewUrlParser: true, useCreateIndex: true};

const app = express();
  
// Conexion a BD using promises
 mongoose.connect(uri, options).then(
    () => { console.log('Conectado a DB') },
    err => { console.log('err') }
);

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//aplication/x-www-form-urlencoded
app.use(express.urlencoded({ extended:true }));


app.use('/api', require('./routes/nota'));

/*app.get('/', function(req, res){
    res.send('holissssss');
})*/

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 4000);
app.listen(app.get('puerto'), function(){
    console.log('Escuchando puerto: ', app.get('puerto'));
})