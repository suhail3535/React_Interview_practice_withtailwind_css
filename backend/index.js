const express = require("express")
const app = express()
const port = 8080

app.use("/", (req, res) => {
    res.send("welcome to home")
})




app.listen(port, () => {
    console.log(`server run on port ${port}`)
})