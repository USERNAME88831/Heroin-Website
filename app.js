const express = require('express')
const app = express()

app.use(express.static(__dirname + "/public"))
app.use("js", express.static(__dirname + "/public/js"))
app.use("css", express.static(__dirname + "/public/css"))

app.get('/', (req, res) => {
    console.log("req at /")
    res.sendFile(__dirname + "/views/main.html")
})


app.listen(80, () => {
    console.log("LISTENING AT PORT 80")
})
