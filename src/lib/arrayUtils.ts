export const arrayCeil = (arr: number[], number: number) => {
  const sorted = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > number) {
      return sorted[i];
    }
  }
  return sorted[sorted.length - 1];
}
