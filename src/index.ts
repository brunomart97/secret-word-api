import express from 'express'

import LevelRoutes from './routes/LevelRoutes'

const PORT = process.env.PORT || 3333
const app = express()

app.use(express.json())

// routes
app.use('/api/level', LevelRoutes)

// api start
app.listen(PORT, () => {
  console.info(`api started successfully on port ${PORT}`)
})
