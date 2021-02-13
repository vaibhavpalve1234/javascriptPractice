const http = require('http')
const express = require('express');
const app = express()
const socketio = require('socket.io')
const server = http.createServer(app)

const io = socketio(server)

let users = {
    aranv:'agaga123'
}

let socketMap = { }

io.on('connection',(socket)=>{
    console.log('connected with socket id = ', socket.id)
    function login(s,u){
        s.join(u)
        s.emit('logged_in')
        socketMap[s.id] = u
        console.log(socketMap)
    }
    // socket.on('login',(data)=>{
    //     socket.join(data.username)
    //     socket.emit('logged_in')
    socket.on('login', (data)=>{
        if(users[data.username]){
            if(users[data.username] == data.password){
                login(socket, data.username)
            }
            else{
                socket.emit('login_failed')
            }
        } else{
            users[data.username] = data.password
            login (socket, data.username)
        }
        console.log(users)
    })
    socket.on('msg_send', (data)=>{
        data.from = socketMap[socket.id]
        if(data.to){
            io.to(data.to).emit('msg_rcvd', data)
        }
        else{
            socket.broadcast.emit('msg_rcvd', data)

        }
    })
    // socket.on('msg_send', (data)=>{
    //     // console.log('rescived data message', data.msg, socket.id)
    //     // socket.broadcast.emit('msg_rcvd', data)
    //     // socket.emit('msg_rcvd', data)
    //     io.emit('msg_rcvd', data)
    // })
    // socket.on('boom',()=>{
    //     console.log('boom recieved from ', socket.id)
    // })
    // setInterval(()=>{
    //     socket.emit('whizz')
    // },2000)
})



app.use('/',express.static(__dirname + '/public'))






server.listen(3344,()=>{console.log('http://localhost:3344')})