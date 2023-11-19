#!/usr/bin/env node

import 'dotenv/config'

import mongoose from './mongo.mjs'
import app from '../server.mjs'
import http from 'http'
const server = http.createServer(app)

server.listen(process.env.SERVER_PORT, () =>
  console.log(`Server running on ${process.env.SERVER_PORT}`),
)
