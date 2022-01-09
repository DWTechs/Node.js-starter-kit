import { Request, Response } from 'express';
import { success, failure } from '../helpers/responseBuilder';
import * as dataArticle from '../data/article.data';

export async function getArticles(req: Request, res: Response): Promise<void>{
	console.log(req.params);
	console.log(req.query);
	const articles = await dataArticle.findAllArticles();
	if (!articles ) res.status(500).json(failure('Articles not found'));
	res.status(200).json(success(articles, 'Articles found'))
}

export async function createArticles(req: Request, res: Response): Promise<void> {
	const newArticle = await dataArticle.createArticle({ name: req.body.name, body: req.body.body })
	res.status(200).json(success(newArticle, 'Articles created'));
}

export async function deleteArticles(req: Request, res: Response): Promise<void> {
	await dataArticle.deleteArticle(req.params.id)
	res.status(201).end();
}