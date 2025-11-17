import express from 'express';
import router from './routes/user.js';

// import { fileURLToPath } from 'node:url';
// import { dirname, join } from 'node:path';
// import { Server } from 'socket.io';

const app = express();


app.get('/', router);


app.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});