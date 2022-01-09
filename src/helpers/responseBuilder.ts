interface ResponseObj {
	success: boolean;
	message: string;
	payload: unknown | null;
	error: string | null;
}

const responseObj: ResponseObj = {
	success: false,
	message: '',
	payload: null,
	error: null,
}

export function success(payload: unknown, message: string): ResponseObj {
	return {
		...responseObj,
		success: true,
		message: message,
		payload
	}
}

export function failure(error: string): ResponseObj {
	return {
		...responseObj,
		error
	}
}
