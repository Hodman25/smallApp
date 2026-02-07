const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const postRouter = require("./router/postrouter")

const app = express()
app.use(express.json())
app.use(cors())

// mongoose.connect("mongodb://localhost:27017/smallApp").then(() => {
//     console.log("successs comnected to database")
// })
mongoose.connect("mongodb+srv://hodmanmaxamed84_db_user:uXxkGD8CiSIR4XV2@cluster0.b1jzpop.mongodb.net/?appName=Cluster0").then(() => {
    console.log("successs comnected to database")
})


app.use(postRouter)

app.use("/allImages", express.static("document"))

app.listen(9000, () => console.log("server is running"))