import express from 'express';
import bodyParser from 'body-parser';
import routes from '../server/routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mount all routes on /api path
app.use('/api', routes);

export default app;