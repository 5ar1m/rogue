const net = require('net');

const server = net.createServer((connection) => {
    connection.on('data', (data) => {
        if (data.toString().toLowerCase().includes('ping')) {
            connection.write('+PONG\r\n');
        }
    });
});

server.listen(1234, "127.0.0.1");