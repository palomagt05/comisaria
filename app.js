import express from "express"
import cors from 'cors'
//importamos la conexion a la DB
import db from "./database/comisariaDB.js"
//importamos nuestro enrutador
import comiRoutes from './routes/routes.js'

const app = express()

app.use( cors() )
app.use(express.json())
app.use('/comisaria', comiRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la DB')
} catch (error) {
    console.log(`El error de conexion es: ${error}`)
}

app.get('/', (req, res)=>{
    res.send('Hola Mundo')
})

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})