const argv = require('argv')
const socket = require('socket.io-client')
const io = socket.connect('http://127.0.0.1:3000')

const wesh = console.log

const exit = (code=0) => process.exit(code)

const args = argv.option([
    {
        name: 'name',
        type: 'string',
        description: 'Name of the mates',
        example: "./app --name='Issou CPP'"
    },
       {
        name: 'room',
        type: 'string',
        description: 'Name of the room',
        example: "./app --room='sm1|sm2|sm3|...'"
    }
]).run()

if (args.options.name === undefined || args.options.room === undefined) {
    argv.help()
    exit()
}

io.on('connect', () => {
    io.emit('join', { name: args.options.name, room: args.options.room })
    wesh('I\' am connected')
})

io.on('disconnect', () => {
    wesh('Disconnected')
    exit()  
})