interface ResponseObject {
	error: string | null;
	message: string;
	payload: unknown | null;
	success: boolean;
}

const baseObject: ResponseObject = {
	error: null,
	message: '',
	payload: null,
	success: false
}

export function responseWithPayload(payload: unknown): ResponseObject {
	return {
		...baseObject,
		payload,
		success: true
	}
}

export function responseWithError(error: string): ResponseObject {
	return {
		...baseObject,
		error
	}
}

export function responseWithMessage(message: string): ResponseObject {
	return {
		...baseObject,
		message,
		success: true
	}
}