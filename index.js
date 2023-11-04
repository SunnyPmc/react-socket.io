const io = require('socket.io-client');
const fs = require('fs')
const socket = io.connect('http://gss.wscada.net');

socket.on('connect', () => {
  console.log('Successfully connected!');
});


//emit event
socket.emit('client_request',  "dhap");

//Listen event
socket.on('dhap', (msg) => {
    console.log(msg)
    fs.writeFile('file.json', JSON.stringify(msg), err => {
        if(err) {
            console.log(err)
        } else {
            console.log("Written successfully")
        }
    })
})
