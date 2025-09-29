//dotenv - debe ser lo primero para que las variables de entorno estén disponibles
const env = require('dotenv');
env.config();

//archivos de ejecución
const express = require('express');
const cors = require('cors');
const app = express();

//swagger
const swaggerIU = require('swagger-ui-express')
const specs = require('./swagger/swagger.js')

//cors 
app.use(cors({ 
    origin:"*",
    methods:["GET","POST","PUT","DELETE","PATCH"],
    allowedHeaders:["Content-Type","Authorization"]
}));

//express.json
app.use(express.json());




//ruta
const apiRouter = require('./router/index');
const usuarioRouter = require('./router/usuarioRouter');

app.use('/api', apiRouter);
app.use('/auth', usuarioRouter)


//swagger json
app.use("/api-docs", swaggerIU.serve, swaggerIU.setup(specs))




//server 
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Servidor en el puerto:', PORT);
})
