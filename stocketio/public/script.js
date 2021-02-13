let socket = io()
// let username;

$('#loginBox').show()
$('#chatBox').hide()


$('#btnStart').click(()=> {
    socket.emit('login',{
        username: $('#inputUsername').val(),
        password: $('#inpPassword').val(),
    })
})

socket.on('logged_in',()=>{

    $('#loginBox').hide()
    $('#chatBox').show()
})

socket.on('login_failed', () =>{
    window.alert('Username or password wrong')
})
$('#btnSendMsg').click(()=>{
    socket.emit('msg_send',{
        to:$('#inpToUser').val(),
        msg: $('#inpNewMsg').val()
    })
})

socket.on('msg_rcvd',(data) => {
    $('#ulMsgs').append($('<li>').text(`[${data.from}] : ${data.msg}`))
})











// let btnSend = document.getElementById('btnSend')
// let inpMsg = document.getElementById('inpMsg')
// let ulMsgList = document.getElementById('ulMsgList')

// btnSend.onclick = function(){
//     socket.emit('msg_send',{
//         msg:inpMsg.value
//     })
//     inpMsg.value = ''
// }

// socket.on('msg_rcvd',(data)=>{
//     let liNewMsg = document.createElement('li')
//     liNewMsg.innerText = data.msg
//     ulMsgList.appendChild(liNewMsg)
// })

// let boomBtn = document.getElementById('boom')
// boomBtn.onclick = function(){
//     socket.emit('boom')
// }
// socket.on('whizz',()=>{
//     let div = document.createElement('div')
//     div.innerText = 'whizz'
//     document.body.appendChild(div)
// })