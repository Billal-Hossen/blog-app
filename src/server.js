import dotenv from 'dotenv'
import { app } from './app.js'
import connectDB from './db/connectDB.js'

dotenv.config({
  path: './.env'
})
const port = process.env.PORT || 8085

const main = async () => {
  try {
    await connectDB()
    app.listen(port, () => {
      console.log(`App is listening on port: http://localhost:${port}`)
    })

  } catch (error) {
    console.log('Database connection error!!', error)
  }
}
main()