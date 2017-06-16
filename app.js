const argv = require('argv')
const socket = require('socket.io-client')
const io = socket.connect('http://127.0.0.1:3000')

const wesh = console.log

const exit = (code=0) => process.exit(code)

io.on('connect', () => {
    //io.emit('join', { id: 1 })
    wesh('I\' am connected')
})

io.on('disconnect', () => {
    wesh('Disconnected')
    exit()
})