import express from 'express';
import dataBase from './database/ormconfig';
import routes from "./routes"
import cors from "cors"

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(routes)
app.use(cors()) // habilita o CORS 

app.listen(port, () =>{
    console.log(`Servidor executando na porta ${port}`)
    console.log(dataBase.isInitialized)
})

