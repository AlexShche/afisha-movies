import express from "express"
import dotenv from "dotenv"
import routes from "./routes.js"
import cors from "cors"

dotenv.config()

const {SERVER_PORT} = process.env
const app = express()

app.use(cors())
app.use(routes)

app.listen(SERVER_PORT)