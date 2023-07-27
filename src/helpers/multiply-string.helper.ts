export const multiplyString = (text: string, multiply: number): string => {
  const aux: string = text;
  text = '';
  for (let i: number = 1; i < multiply; i++)
    text += aux;
  return text;
}
