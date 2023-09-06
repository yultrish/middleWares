const express = require('express')
const app = express()

app.use(logMiddleWare)
app.use(middlewareThree)
app.use(middlewareOne)
app.get("/", middlewareTwo, middlewareFour, (req, res) => {
    res.send('Home Page')
    // console.log('Home Page')
    console.log('inside Home Page')

})

app.get('/users', auth,(req, res)=>{
    console.log(req.admin)
    res.send('users page')
    console.log('users page')
})

function logMiddleWare(req, res, next){
    // res.send('log-middle-wares')
    console.log('log-middle-ware')
    next()
}

function auth (req, res, next){
    if (req.admin === 'true'){
        req.admin = true
          console.log('auth is the admin')
        next()
    }else{
        res.send('You not an auth admin')
    }
   
}

function middleware(req, res, next) {
  console.log("Before Next")
  next()
  console.log("After Next")
}

function middlewareOne(req, res, next) {
  console.log("Middleware One")
  next()
}

function middlewareTwo(req, res, next) {
  console.log("Middleware Two")
  next()
}

function middlewareThree(req, res, next) {
  console.log("Middleware Three")
  next()
}

function middlewareFour(req, res, next) {
  console.log("Middleware Four")
  next()
}

PORT = 3000
app.listen(PORT, ()=>
    console.log(`Port ${PORT} is running`)
)