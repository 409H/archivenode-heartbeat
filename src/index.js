const express = require('express')
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT

app.use(cors())

app.get('/', (req, res) => {
    res.send(`ArchiveNode`)
})

app.get('/heartbeat', (req, res) => {

    const data = {
        "jsonrpc":"2.0",
        "method":"eth_blockNumber",
        "params":[],
        "id":83
    }

    axios.post(`https://api.archivenode.io/${process.env.API_KEY}`, data)
    .then((response) => {
        if('result' in response.data) {
            res.status(200).json(response.data)
            return
        } else {
            res.status(503).json({ error: response.data })
            return
        }
    }).catch((err) => {
        res.status(503).json({ error: 'API not reachable' })
        return
    });
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})