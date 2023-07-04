export class ExhaustiveError extends Error {
  static {
    this.prototype.name = 'ExhaustiveError';
  }
}
