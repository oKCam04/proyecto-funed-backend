//archivos de ejecución
const express=require('express');
const cors = require('cors');
const app=express();

//orden archivos de ejecución, cors, env, express.json, rutas, server 
//dotenv
const env=require('dotenv');
env.config();

//cors 
app.use(cors({ 
    origin:"*",
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders:["Content-Type","Authorization"]
}));
//express.json
app.use(express.json());

//ruta
 const personasRouter=require('./router/personasRouter');
 const cursosRouter=require('./router/cursosRouter');
 const docentesRouter=require('./router/docenteRouter');
 app.use('/api/',personasRouter);
 app.use('/api/',cursosRouter);
 app.use('/api/',docentesRouter);
 





//server 
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log('Servidor en el puerto:',PORT);
})
