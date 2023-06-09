export class InvalidResponseBodyError extends Error {
  static {
    this.prototype.name = 'InvalidResponseBodyError';
  }
}
