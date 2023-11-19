import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser'

const app = express()

// Middlewares
app.use(helmet())
app.use(
  cors({
    origin: `${process.env.CLIENT}`,
    credentials: true,
    optionsSuccessStatus: 204,
    // 'allowedHeaders': ['sessionId', 'Content-Type'],
    // 'exposedHeaders': ['sessionId'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
  }),
)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join('__dirname', 'public')))
app.use(cookieParser())

// Routers
// app.use('/x', xRouter)

// Incoming Request Capture
app.all('*', (req, res, next) => {
  console.log('>> Incoming Request')
  res.sendStatus(500)
})

export default app
