import {  Router } from 'express';
import * as controllerArticle from '../controllers/article.controller';

export default (): Router => {
	const router = Router();

	router.get('', controllerArticle.getArticles);
	router.post('', controllerArticle.createArticles);
	router.delete('/:id', controllerArticle.deleteArticles);

	return router;
}