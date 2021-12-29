import { Express } from 'express';

import routeArticle from './article.route';
import { errorHandler } from './error.route';

export default function (app: Express) {
	app.use('/articles', routeArticle())
	
	app.use(errorHandler)
}