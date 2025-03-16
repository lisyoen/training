import express from 'express'; 
import http from 'http'; 
import { Server } from 'socket.io'; 
import path from 'path'; 

const app = express(); 
const server = http.createServer(app); 
const io = new Server(server); 

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, '..', 'dist')));

// Default route (optional, can redirect to index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

io.on('connection', (socket) => { 
    console.log('A user connected'); 

    socket.on('chat message', (msg) => { 
        console.log('Message: ' + msg); 
        io.emit('chat message', msg); 
    });

    socket.on('disconnect', () => { 
        console.log('A user disconnected'); 
    });
});

const PORT = 3000; 
server.listen(PORT, () => { 
    console.log(`Server is running on http://localhost:${PORT}`); 
});
