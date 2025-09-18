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
    methods:["GET","POST","PUT","DELETE","PATCH"],
    allowedHeaders:["Content-Type","Authorization"]
}));
//express.json
app.use(express.json());

//ruta
    const personasRouter=require('./router/personasRouter');
    const cursosRouter=require('./router/cursosRouter');
    const docentesRouter=require('./router/docenteRouter');
    const ofertaCursosRouter=require('./router/ofertaCursosRouter');
    const docenteRouter=require('./router/docenteRouter');
    const inscripcionRouter=require('./router/inscripcionRouter');
    const usuarioRouter=require('./router/usuarioRouter');
    const pagoRouter=require('./router/pagoRouter');
    const certificadoRouter=require('./router/certificadoRouter');
    const asistenciaRouter=require('./router/asistenciaRouter');
    app.use('/api/',pagoRouter);
    app.use('/api/',certificadoRouter)
    app.use('/api/', asistenciaRouter)
    app.use('/api/',personasRouter);
    app.use('/api/',cursosRouter);
    app.use('/api/',docentesRouter);
    app.use('/api/',ofertaCursosRouter);
    app.use('/api/',docenteRouter);
    app.use('/api/',inscripcionRouter);
    app.use('/auth',usuarioRouter)

 




//server 
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log('Servidor en el puerto:',PORT);
})
