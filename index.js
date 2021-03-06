const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT=process.env.PORT || 5000;
const router=require('./router');



app.use(router);
http.listen(PORT,()=>{
    console.log('Server has started on port ${PORT}');
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
