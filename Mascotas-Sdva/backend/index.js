import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import rutaMascotas from './src/routes/Mascotas.route.js';
import rutaUsuario from './src/routes/Usuario.route.js';
import rutaOpcion from './src/routes/Opcion.route.js';

const servidor = express();

// Habilita CORS
servidor.use(cors());

// Configura body-parser para manejar solicitudes POST
servidor.use(bodyParser.urlencoded({ extended: false }));
servidor.use(bodyParser.json());

// Rutas
servidor.use('/mascotas', rutaMascotas);
servidor.use('/usuario', rutaUsuario);
servidor.use('/opciones', rutaOpcion);

// Configuración de vistas y archivos estáticos
servidor.set("view engine", "ejs");
servidor.set("views", "./view");
servidor.use(express.static('./public'));

// Ruta para mostrar un documento
servidor.get("/document", (req, res) => {
    res.render("document.ejs");
});

// Inicia el servidor en el puerto 3000
servidor.listen(3000, () => {
    console.log('Servidor funcionando con el puerto 3000');
});
