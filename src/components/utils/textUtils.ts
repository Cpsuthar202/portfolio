export const trimTextToWordLimit = (text: string, wordLimit: number): string => {
  // const words = text.split("");
  return text.length > wordLimit ? text.slice(0, wordLimit) + "..." : text;
};
