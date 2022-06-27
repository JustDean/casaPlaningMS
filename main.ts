import express, {Express} from "express"
import mongoose from "mongoose"
import config, { IConfig } from "config"
import cors from "cors"
import pino, {Logger} from 'pino'
import expressPinoLogger, { HttpLogger, Options } from "express-pino-logger"


import router from "./app/dashboard/urls"


const app: Express = express()

const logger: Logger= pino()
const expressPino: HttpLogger = expressPinoLogger({logger})

app.use(expressPino)
app.use(express.json())
app.use(cors())

app.use("/api", router)

async function main(){
    const dbConfig: IConfig = config.get("db")
    const dbUri = `mongodb://${dbConfig.get("host")}:${dbConfig.get("port")}/${dbConfig.get("name")}`

    await mongoose.connect(dbUri)
    logger.info(`Connected to ${dbUri}`)
    
    const serverConfig: IConfig = config.get("server")
    const HOST: string = serverConfig.get("host")
    const PORT: number = serverConfig.get("port")

    app.listen(PORT, HOST, () => logger.info(`Server started on ${HOST}:${PORT}`))
}

main()