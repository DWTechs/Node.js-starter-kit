import { Article } from "../models/article.model";

let articles: Article[] = [{
	id: '1',
	name: 'test',
	body: 'test body'
}];

export async function findAllArticles(): Promise<Article[]> {
	return articles;
}

export async function createArticle(article: Article): Promise<Article> {
	article.id = String(articles.length+1);
	articles.push(article);
	return article;
}

export async function deleteArticle(id: string): Promise<void> {
	articles = articles.filter(article => article.id !== id);
}