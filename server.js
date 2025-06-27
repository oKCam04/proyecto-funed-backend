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
 const modulosRouter=require('./router/modulosRouter');
 const notasRouter=require('./router/notasRouter');
 const horariosRouter=require('./router/horariosRouter');
 const pagosRouter=require('./router/pagosRouter');
 const financiamientoRouter=require('./router/financiamientoRouter');
 const matriculaRouter=require('./router/matriculaRouter');
 const tecnicosRouter=require('./router/tecnicosRouter');
 const cortosRouter=require('./router/cortosRouter');
 app.use('/api/',personasRouter);
 app.use('/api/',cursosRouter);
 app.use('/api/',docentesRouter);
 app.use('/api/',modulosRouter);
 app.use('/api/',notasRouter);
 app.use('/api/',horariosRouter);
 app.use('/api/',pagosRouter);
 app.use('/api/',financiamientoRouter);
 app.use('/api/',matriculaRouter);
 app.use('/api/',tecnicosRouter);
 app.use('/api/',cortosRouter);
 





//server 
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log('Servidor en el puerto:',PORT);
})
