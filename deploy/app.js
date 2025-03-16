"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var socket_io_1 = require("socket.io");
var path_1 = __importDefault(require("path")); // 추가된 모듈
// Create an Express application
var app = express_1.default();
var server = http_1.default.createServer(app);
var io = new socket_io_1.Server(server);
// Serve static files from the "src" directory
app.use(express_1.default.static(path_1.default.join(__dirname))); // 정적 파일 제공
// Handle socket.io connections
io.on('connection', function (socket) {
    console.log('A user connected');
    // Listen for chat messages
    socket.on('chat message', function (msg) {
        console.log('Message: ' + msg);
        io.emit('chat message', msg); // Broadcast message to all clients
    });
    // Handle user disconnect
    socket.on('disconnect', function () {
        console.log('A user disconnected');
    });
});
// Start the server
var PORT = 3000;
server.listen(PORT, function () {
    console.log("Server is running on http://localhost:" + PORT);
});
