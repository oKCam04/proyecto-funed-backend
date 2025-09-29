//dotenv - debe ser lo primero para que las variables de entorno estén disponibles
const env = require('dotenv');
env.config();

//archivos de ejecución
const express = require('express');
const cors = require('cors');
const app = express();

//swagger
// const swaggerIU = require('swagger-ui-express')
// const specs = require('./swagger/swagger.js')

//express.json
app.use(express.json());

//cors 
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET,POST,PUT,DELETE,PATCH",
    allowedHeaders: "Content-Type,Authorization",
    optionsSuccessStatus: 204
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));


//ruta
// const apiRouter = require('./router/index');
// const usuarioRouter = require('./router/usuarioRouter');

// app.use('/api', apiRouter);
// app.use('/auth', usuarioRouter)


//swagger json
// app.use("/api-docs", swaggerIU.serve, swaggerIU.setup(specs))




//server 
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Servidor en el puerto:', PORT);
})
