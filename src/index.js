const express = require('express')
const app = express()
const path = require('path')

app.listen(3000, () => {
  console.log("we're connected to port 3000")
})