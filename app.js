const express = require('express')
const ejs = require('ejs')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const POST = process.env.POST || 3000
const app = express()


app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))

app.use(cookieParser())

app.get('/login', (req, res)=>{ //Get = req.cookies.name of cookies
  return res.render('login', {username: req.cookies.username})
})

app.post('/login', (req, res)=>{
  let username = req.body.username
  res.cookie('username', username, {maxAge: 90000})
  return res.redirect('/login')
})


app.listen(POST, ()=>{
  console.log('Server running...')
})
