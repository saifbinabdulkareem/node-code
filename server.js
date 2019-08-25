// console.log('Hello World')

const express = require("express");
const app = express();


// app.use(express.json())
app.listen(3002, ()=> {
    console.log("server running on port ::3002")
})

app.post('/getData', (req, res) => {
    // res.send({message: "Hello World"}) for getting
    console.log("Posting===>",  req.body)
})