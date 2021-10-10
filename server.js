const express = require('express')
const app = express()
const cors = require("cors")
const login = require("./routes/login")


app.use(cors())
app.use("/login", login)

const port = 3000
app.listen(process.env.PORT || port,()=>{

    console.log(`app is listening in port ${port}`)

})





   