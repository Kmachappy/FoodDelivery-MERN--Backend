require("dotenv").config
const { PORT=3001 } = process.env;
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")


// Initiate express
const app = express()


app.use(cors())
app.use(morgan("dev"))
app.use(express.json())



app.listen(PORT, ()=>console.log(`Listening on Port ${PORT}`))