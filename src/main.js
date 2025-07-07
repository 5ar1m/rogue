const net = require('net');

const server = net.createServer((connection) => {
    connection.on('data', (data) => {
        if (data.toString().toLowerCase().includes('ping')) {
            connection.write('+PONG\r\n');
        }
        // after learning redis protocols try to implement ping for multiple pings
    });
});

server.listen(1234, "127.0.0.1");