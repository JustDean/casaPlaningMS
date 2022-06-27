const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const cors = require("cors")
const pino = require('pino')()
const expressPino = require('express-pino-logger')({
  logger: pino
})

const router = require("./app/dashboard/urls")


const app = express()

app.use(expressPino)
app.use(express.json())
app.use(cors())

app.use("/api", router)

async function main(){
    const dbConfig = config.get("db")
    const dbUri = `mongodb://${dbConfig.get("host")}:${dbConfig.get("port")}/${dbConfig.get("name")}`

    await mongoose.connect(dbUri)
    pino.info(`Connected to ${dbUri}`)
    
    const serverConfig = config.get("server")
    const HOST = serverConfig.get("host")
    const PORT = serverConfig.get("port")

    app.listen(PORT, HOST, () => pino.info(`Server started on ${HOST}:${PORT}`))
}

main()