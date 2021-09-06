export function isInteresting(n: number, awesomePhrases: number[]): number {
  console.log("isInteresting",n, awesomePhrases);
  if (izInteresting(n, awesomePhrases)) {
   return 2;
  } else if (izInteresting(n+1, awesomePhrases) || izInteresting(n+2, awesomePhrases)) {
   return 1;
  } 
  return 0;
}
 
const izInteresting = (n: number, awesomePrases: number[]): boolean => n > 99 && rules.some(rule => rule(n, awesomePrases))

const rules: Array<RuleFn> = [
  // Any digit followed by zeros,
  n => /^[1-9]0+$/.test(n.toString()),
  // Every digit is the sameNumber,
  n => n.toString().split('').every((d, idx, arr) => d === arr[0]),
  // Digits are sequential, incrementing
  n => "1234567890".includes(n.toString()),
  // Digits are sequential, decrementing
  n => "9876543210".includes(n.toString()),
  // Digits are a palindrome
  n => n.toString() === n.toString().split('').reverse().join(''),
  // Digits in awesomePhrases
  (n, awesomePhrases) => awesomePhrases.some(phrase => phrase === n)
]

type RuleFn = (n: number, awesomes: number[]) => boolean;
