export class ApiError extends Error {
	constructor(code, message) {
		super(message);
		this.statusCode = code;
	}
}
