import express from 'express'
import body_parser from 'body-parser'
import cors from 'cors'
import rutaMascotas from './src/routes/Mascotas.route.js'
import rutaUsuario from './src/routes/Usuario.route.js'
import rutaOpcion from './src/routes/Opcion.route.js'

const servidor = express()
servidor.use(cors())

servidor.use(body_parser.json())
servidor.use(body_parser.urlencoded({extend: false}))

servidor.use('/mascotas', rutaMascotas)
servidor.use('/usuario', rutaUsuario)
servidor.use('/opciones', rutaOpcion)

servidor.set("view engine", "ejs")
servidor.set("views", "./view")

servidor.use(express.static('./public'))

servidor.get("/document", (req, res) => {
    res.render("document.ejs")
})
servidor.listen(3000, () => {
    console.log('Servidor funcionando con el puerto 3000');
})