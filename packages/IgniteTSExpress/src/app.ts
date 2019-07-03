import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import config from './config';

const app: express.Application = express();

app.set('port', config.app.port);
app.set('ip', config.app.ip);

app.use(helmet.xssFilter());
app.use(helmet.hidePoweredBy());
app.use(helmet.noSniff());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response): void => {
  res.send('ARCADIA POS API Server!');
});

export default app;
