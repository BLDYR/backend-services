import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { pcBuildsRoutes } from '@routes';

const app = express();
const env = process.env.NODE_ENV || app.get('env');
const PORT = 5000;

app.use(express.json());
app.use('/pc-builds', pcBuildsRoutes);

app.listen(PORT, () => {
  console.log('server env: ', env, process.env.NODE_ENV)
  console.log(`API Gateway is running in **${env}** Mode on port ${PORT}`);
});
