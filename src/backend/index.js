require('dotenv').config()

const express = require('express')

const { default: OBSWebSocket } = require('obs-websocket-js')
const obs = new OBSWebSocket()

const cors = require('cors')

const router = require('./app/routers/index')

const app = express()

app.use(cors())

app.use(express.static('./public'))

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(router)

const connect = async () => {
  try {
    const { obsWebSocketVersion, negotiatedRpcVersion } = await obs.connect(
      `${process.env.OBS_HOST}:${process.env.OBS_PORT}`,
      process.env.OBS_PASSWORD,
      { rpcVersion: 1 }
    )

    return `Connected to server ${obsWebSocketVersion} (using RPC ${negotiatedRpcVersion})`
  } catch (error) {
    console.error('Failed to connect', error.code, error.message)
  }
}

connect().then((value) => console.log(value))

app.get('/ping', (req, res) => {
  res.json({ message: 'Connexion établie !', timestamp: new Date() })
})

const PORT = process.env.PORT || 3310
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:PORT`)
})
