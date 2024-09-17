export function isValidJson(input: unknown): boolean {
  if (typeof input !== 'string') {
    return false;
  }

  try {
    const obj = JSON.parse(input) as unknown;

    return typeof obj === 'object' && obj !== null;
  }
  // eslint-disable-next-line unused-imports/no-unused-vars
  catch (error) {
    return false;
  }
}
