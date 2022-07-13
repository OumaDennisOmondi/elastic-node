import express from "express"
import os from "os"

const app = express()

const PORT = 3000

app.get('/', (req, res) =>{
    res.send(`Hello World from Express Node running on  K8s\n, from Host: ${os.hostname()}`)
})

app.listen(PORT, (req, res) =>{
    console.log("Application is up and running")
})