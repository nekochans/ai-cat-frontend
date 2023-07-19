export class TooManyRequestsError extends Error {
  static {
    this.prototype.name = 'TooManyRequestsError';
  }
}
