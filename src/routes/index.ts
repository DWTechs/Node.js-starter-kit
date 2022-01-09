import { Express } from 'express';

import routeArticle from './article.route';

export default function (app: Express) {
	app.use('/articles', routeArticle())
	
}