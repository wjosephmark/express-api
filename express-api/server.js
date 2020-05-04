const express = require("express")

const port = process.env.port || 4000 
const app = express()

app.listen(port, () => {
    console.log(`Server runnint on port ${port}`)
})