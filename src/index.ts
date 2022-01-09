import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import useRoutes from './routes';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const PORT = 3000;
const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cookieParser());

useRoutes(app);

app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});