import express from 'express';
import pRouter from './routes/p.routes.js';

const app = express();
app.use(express.json());
app.listen(3000, () => console.info('Start API :::'));