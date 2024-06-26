import express from 'express'
import todoRouts from './routes/todoRoutes.js'
import connectDB from './lip/db.js'
import cors from 'cors'

const app = express()
const PORT = 5000

// cors middleware
app.use(cors())


// understanding middleware
app.use(express.json())

// Database
connectDB()

// Routes
app.get('/', (req, res) => {
  res.send('Hello World')
})

// middleware
app.use('/items', todoRouts)

// Listen port
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`)
})
