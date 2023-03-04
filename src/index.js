const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const collection = require('./mongodb')

const templatePath = path.join(__dirname,'../templates')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs")
app.set("views", templatePath)

app.get("/", (req, res) => {
  res.render("login")
})

app.get("/regis", (req, res) => {
  res.render("regis")
})

app.post("/regis", async (req, res) => {
  const data = {
    username: req.body.username,
    password: req.body.password,
  }

  await collection.insertMany([data])

  res.render("login")

})

app.listen(3000, () => {
  console.log("we're connected to port 3000")
})