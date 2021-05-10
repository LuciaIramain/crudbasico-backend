// const express = requiere('express'); ES5
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path'; //path me ayuda a reconstruir la ruta

// settings
// creo una instancia(quiero usarlo) de express
const app = express();
//Crear una variable con express (app.set) -- set es para crear algo con express
app.set('port', process.env.PORT || 4000);
// con app.get obtengo la variable que cree
app.listen(app.get('port'),()=>{
    // console.log(path.join(__dirname, '../public')); //__dirname: variable constante y viene de node y me muestra la ruta donde estoy
    console.log('estoy en el puerto ' + app.get('port'));
});

//Middlewares(librerias que creo otras personas) -- Aqui van mas herramientas
app.use(morgan('dev')); //combinacion de colores y nos informa las peticiones
app.use(cors()); //nos permite la comunicacion externa, es para solicitudes externas
app.use(express.json()); //para entender formato json
app.use(express.urlencoded({extended:true}));//para mandar datos y que lo reciba, tambien para que entienda json
// agrego la carpeta public como estatica(es decir que cada vez que alguien haga un get muestre esta carpeta)
app.use(express.static(path.join(__dirname, '../public')));

// Crear una ruta
app.get('/',(req, res)=>{ //ruta ,(subir la solicitud, respuesta que quiero enviar)
    res.send('hola desde el servidor de backend');
});