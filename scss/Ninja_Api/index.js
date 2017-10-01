// importar libreria de express
const express=require('express');
const rot=require('./routes/api');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
// inicializar express
const app=express();

// connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;


app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function(err,req,res,next) {
  res.status(422).send({error:err.message});
});

// escuchar requests
app.listen(process.env.port||4000,function() {
  console.log('ahora escuchando solicitudes');
});
