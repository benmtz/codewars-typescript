const region = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;-?! '()$%&"`;
const mirrors: Map<string, string> = new Map(region.split('').map((key, idx, arr) => [key, arr[arr.length - 1 - idx]]));
const invertedRegion: Map<string, number> = new Map(region.split('').map((c, idx)=>[c, idx]));

export function encrypt(text:string):string {
  return text.split("")
    .map(toggleOddCase)
    .map(getPrecedingDiffRegion)
    .map(mirrorFirst)
    .join("");
}

export function decrypt(encryptedText:string):string {
let arr: Array<string> = encryptedText
    .split("")
    .map(mirrorFirst);
arr.forEach(unGetPrecedingDiffRegion);
return arr.map(toggleOddCase).join("");
}

const toggleOddCase = (c: string, idx: number): string => {
  if (idx % 2) {
    if (c === c.toUpperCase()) {
      return c.toLowerCase();
    }
    return c.toUpperCase();
  }
  return c;
}

export const getPrecedingDiffRegion = (c: string, idx: number, arr: Array<string>): string => {
  if (idx === 0) return c;
  const preceding = arr[idx - 1];
  const diff: number = getIndex(preceding) - getIndex(c)
  return region[(diff + 77) % 77];
}

export const unGetPrecedingDiffRegion = function(c: string, idx: number, arr: Array<string>): void {
    if (idx === 0) return;
    const encodedIndex = getIndex(c);
    const encodedPreviousIndex = getIndex(arr[idx - 1]);

    const decodedIndex = encodedPreviousIndex - encodedIndex;
    arr[idx] = region[decodedIndex < 0 ? decodedIndex + 77: decodedIndex];
}

const mirrorFirst = (c: string, idx: number): string => idx === 0 ? getMirror(c): c;
const getIndex = (c: string): number => {
    if (!invertedRegion.has(c)) throw new Error();
    return invertedRegion.get(c) as number
};
const getMirror = (c: string): string => {
    if (!mirrors.has(c)) throw new Error();
    return mirrors.get(c) as string;
}
