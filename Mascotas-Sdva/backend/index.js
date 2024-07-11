import express from 'express'
import body_parser from 'body-parser'
import cors from 'cors'
import routerCategoria from './src/routes/categorias.js'
import routerGenero from './src/routes/generos.js'
import routerMascota from './src/routes/mascotas.js'
import routerRaza from './src/routes/razas.js'
import routerUsuario from './src/routes/usuarios.js'
import routerValidar from './src/routes/validacion.js'

const servidor = express()
servidor.use(cors())

servidor.use(body_parser.json())
servidor.use(body_parser.urlencoded({extend: false}))

servidor.use("/categorias",routerCategoria)
servidor.use("/generos",routerGenero)
servidor.use("/mascotas",routerMascota)
servidor.use("/razas",routerRaza)
servidor.use("/usuarios",routerUsuario)
servidor.use(routerValidar)

servidor.set("view engine", "ejs")
servidor.set("views", "./view")

servidor.use(express.static('./public'))

servidor.get("/document", (req, res) => {
    res.render("DocumentKaren.ejs")
})

servidor.listen(3000, () => {
    console.log('Servidor funcionando');
})
