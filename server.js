const express = require('express');

const routerV1 = require('./routers/index');

const app = express();

const port = 8080;

app.use(express.json());

/* Middleware para obtener el método de la llamada */
app.use('*', (req,res,next) => {
    console.log(req.method);
    next();
});

routerV1(app);

app.listen(port, () => {
    console.log("Server running in port: ",port);
});