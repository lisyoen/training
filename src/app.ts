import express from 'express'; // Express 모듈을 가져와 웹 서버를 생성
import http from 'http'; // Node.js의 기본 HTTP 모듈을 가져와 서버 생성
import { Server } from 'socket.io'; // socket.io 모듈을 가져와 실시간 통신 기능 추가
import path from 'path'; // 경로 조작을 위한 Node.js 기본 모듈

// Create an Express application
const app = express(); // Express 애플리케이션 생성
const server = http.createServer(app); // HTTP 서버 생성 (Express 앱과 연결)
const io = new Server(server); // Socket.IO 서버 생성 (HTTP 서버와 연결)

// Serve static files from the "src" directory
app.use(express.static(path.join(__dirname))); 
// 정적 파일 제공: 현재 디렉토리(__dirname)를 기준으로 정적 파일을 제공
// 예: HTML, CSS, JS 파일을 클라이언트에 제공

// Handle socket.io connections
io.on('connection', (socket) => { 
    // 클라이언트가 Socket.IO를 통해 연결되었을 때 실행
    console.log('A user connected'); // 연결된 사용자 로그 출력

    // Listen for chat messages
    socket.on('chat message', (msg) => { 
        // 클라이언트로부터 'chat message' 이벤트 수신
        console.log('Message: ' + msg); // 수신된 메시지 로그 출력
        io.emit('chat message', msg); 
        // 모든 클라이언트에게 메시지 브로드캐스트
    });

    // Handle user disconnect
    socket.on('disconnect', () => { 
        // 클라이언트가 연결을 끊었을 때 실행
        console.log('A user disconnected'); // 연결 해제된 사용자 로그 출력
    });
});

// Start the server
const PORT = 3000; // 서버가 실행될 포트 번호
server.listen(PORT, () => { 
    // 서버 시작 및 포트에서 대기
    console.log(`Server is running on http://localhost:${PORT}`); 
    // 서버 실행 확인 메시지 출력
});
