export class InvalidResponseBodyError extends Error {
  static {
    this.prototype.name = 'InvalidResponseBodyError';
  }

  constructor(error = '', options = {}) {
    const { ...rest } = options;
    super(error, rest);
  }
}
