const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors")

const routes = require("./routes/todoroutes")

const app = express()

const PORT = process.env.PORT || 5122

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err))

app.use("/api", routes)

app.listen(PORT, () => {
    console.log(`server running at PORT ${PORT}`)
})