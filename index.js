
const fs = require('fs')
const http = require('http')
const port = 3000
let rect = require('./rectange')
let add = require('./sum')
let say = require('./message')

const data =fs.readFileSync('./message.js',{encoding:"utf-8"},
(err,data)=>{
    err?console.log('cant read file',err):console.log("Data",data)
})
const {hello} = say 
const {area,perimeter} = rect
const {sum} = add

console.log(hello('Taoufik'))
console.log(area(2,2))



const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json"})
    res.end(`${hello('taoufik')}
    area : ${area(3,5)}
    perimeter ${perimeter(3,5)}
    sum is ${sum(3,5)}`)
})


server.listen(port,(err)=>{
    err?console.log('Connection Failed'):console.log('Server running on ' + port)
})
