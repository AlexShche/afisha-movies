import express from "express"
import bodyParser from "body-parser"
import controller from "./controller.js"

const router = express.Router()
const urlEncodedParser = bodyParser.urlencoded({extended: false})

router.route("/movies/all")
    .get(urlEncodedParser, controller.allMovies)

export default router