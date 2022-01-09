import {  NextFunction, Request, Response } from 'express';
import { failure} from '../helpers/responseBuilder';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
	console.error(err)
	res.status(500).json(failure(err.message))
}