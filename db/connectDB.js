const mongoose = require('mongoose')
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://naufalm09:anjingbabi01@cluster0.ias56.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB