const net = require("net"); // used to create a tcp server

const server = net.createServer((connection) => {
    // do something
});

server.listen(1234, "127.0.0.1");
