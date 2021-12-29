import { Request, Response } from 'express';
import { responseWithPayload } from '../helpers/responseBuilder';
import * as dataArticle from '../data/article.data';

export async function getArticles(req: Request, res: Response): Promise<void>{
	const articles = await dataArticle.findAllArticles();
	res.status(200).json(responseWithPayload(articles))
}

export async function createArticles(req: Request, res: Response): Promise<void> {
	const newArticle = await dataArticle.createArticle({ name: req.body.name, body: req.body.body })
	res.status(200).json(responseWithPayload(newArticle));
}

export async function deleteArticles(req: Request, res: Response): Promise<void> {
	await dataArticle.deleteArticle(req.params.id)
	res.status(201).end();
}