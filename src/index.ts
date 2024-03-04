import express from 'express'
import cors from 'cors'
import env from 'dotenv'

import LevelRoutes from './routes/LevelRoutes'

env.config()

const PORT = process.env.PORT || 3333
const app = express()

app.use(cors())
app.use(express.json())

// routes
app.use('/api/level', LevelRoutes)

// api start
app.listen(PORT, () => {
  console.info(`api started successfully on port ${PORT}`)
})
