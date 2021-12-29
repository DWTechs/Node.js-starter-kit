import * as reponseBuilder from '../../src/helpers/responseBuilder';

describe('responseBuilder', () => {
	it('should return response with payload', () => {
		expect(reponseBuilder.responseWithPayload({ test: 'test' })).toEqual({
			error: null,
			message: '',
			payload: { test: 'test' },
			success: true
		})
	});
	
	it('should return response with message', () => {
		expect(reponseBuilder.responseWithMessage('message')).toEqual({
			error: null,
			message: 'message',
			payload: null,
			success: true
		})
	});

	it('should return response with error', () => {
		expect(reponseBuilder.responseWithError('error')).toEqual({
			error: 'error',
			message: '',
			payload: null,
			success: false
		})
	});
});