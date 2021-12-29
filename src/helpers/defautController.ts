import { NextFunction, Request, Response } from "express";

export default function (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) {
	return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			return await fn(req, res, next);
		}
		catch (err) {
			next(err)
		}
	}
}