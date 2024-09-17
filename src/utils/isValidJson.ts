export function isValidJson(input: unknown): boolean {
  if (typeof input !== 'string') {
    return false;
  }

  try {
    const obj = JSON.parse(input) as unknown;

    return typeof obj === 'object' && obj !== null;
  }
  catch (error) {
    return false;
  }
}
