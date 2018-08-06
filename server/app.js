import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes';

mongoose.connect('mongodb://localhost:27017/reddit', () => {
	console.log("Connected to mongo db");
});

const app = express();

// Middleware
app.use(bodyParser.json());

app.use('/api', routes);

export default app;