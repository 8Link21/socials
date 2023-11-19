import mongoose from 'mongoose'

// Mongo Atlas
// const connectionMongoAtlas = process.env.ATLAS_URI || ''

export default mongoose
  .connect(`mongodb://${process.env.DB_HOST}`, {
    autoCreate: false,   // auto create Collection for each model
    autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // user: ,
    // pass: ,
    // dbName: ,

  })
  .then(() => console.log(`MongoDB connected`))
  .catch((err) => console.log(`MongoDB connection failed: ${err}`))


mongoose.connection.on('error', err => {
  console.log(`MongoError : ${err}`)
})

mongoose.connection.on('disconnected', (err) => {
  console.log(`MongoServerError @Disconnection: ${err}`)
})

