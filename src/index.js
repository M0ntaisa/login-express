const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const templatePath = path.join(__dirname,'../templates')

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", templatePath)

app.get("/", (req, res) => {
  res.render("login")
})

app.get("/regis", (req, res) => {
  res.render("regis")
})

app.listen(3000, () => {
  console.log("we're connected to port 3000")
})