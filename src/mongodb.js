const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/loginExpress")
  .then(() => {
    console.log("mongodb connected")
  })
  .catch(() => {
    console.log("mongodb connected failed")
  })

const loginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const LoginCollection = new mongoose.model("LoginCollection", loginSchema)

module.exports = LoginCollection