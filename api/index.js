const express = require('express')
const cors = require('cors')
const contactRoute = require('./routes/contact')

const app = express()
const PORT = process.env.PORT || 3001

const allowedOrigins = [
  'http://localhost:3000',
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null,
  process.env.FRONTEND_URL || null,
].filter(Boolean)

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true)
    callback(new Error('Not allowed by CORS'))
  },
}))

app.use(express.json())

app.get('/health', (req, res) => res.json({ status: 'ok' }))
app.use('/api/contact', contactRoute)

app.listen(PORT, () => console.log(`API running on port ${PORT}`))
