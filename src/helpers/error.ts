export function formatErrors(error: string) {
  // Format each message in array object
  const pattern = /(?<=:\s|\.,\s|,\s)\w+:.+?(?=\.|\.,|,\s)/gi;
  const errors = error.match(pattern)?.map((error) => {
    const [key, value] = error.split(": ");
    return { [key]: value };
  });
  return errors;
}
