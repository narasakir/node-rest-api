import express from 'express';

const app = express();
app.get('/', (req, res) => res.send('Hello, this is API and I\'m ok!'));

export default app;