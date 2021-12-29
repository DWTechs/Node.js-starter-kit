import {  Router } from 'express';
import * as controllerArticle from '../controllers/article.controller';
import defaultController from '../helpers/defautController'

export default (): Router => {
	const router = Router();

	router.get('', defaultController(controllerArticle.getArticles));
	router.post('', defaultController(controllerArticle.createArticles));
	router.delete('/:id', defaultController(controllerArticle.deleteArticles));

	return router;
}