export const findUniq = (arr: string[]) => {
    const normalizedToken = defineNormalityFromFirst(arr);
    if (normalizedToken === undefined) return arr[0];
    let c;
    for (let i = 1; i < arr.length; i++) {
        c = arr[i];
        arr[i] = normalize(arr[i]);
        if (arr[i] !== normalizedToken) return c;
    }

}

const defineNormalityFromFirst = (array: string[]) => {
    const norm = array.slice(0, 3).map(normalize);
    if (norm.filter((normalized, i, arr) => normalized === arr[0]).length > 1) return norm[0];
}

export const normalize = (str: string) => str
    .split('')
    .map(lower)
    .map(removeSpaces)
    .sort()
    .reduce(noFollowingDupes, '');

const lower = (c: string) => c.toLowerCase();
const removeSpaces = (c: string) => c.replace(/\s*/g, '');
const noFollowingDupes = (acc: string, c: string) => acc.slice(-1) === c ? acc: acc + c;
