const romansDigits = ['I', 'X', 'C', 'M'];
const romansFifth = ['V', 'L', 'D'];

export const solution = (nb: number): string => nb
        .toString()
        .split('')
        .map(d => +d)
        .map((value, idx, array) => {
            const o = (array.length - 1) - idx;
            if (value === 0) {
                return ''
            } else if (value <= 3) {
                return romansDigits[o].repeat(value);
            } else if (value <= 5) {
                return romansDigits[o].repeat(5 - value) + romansFifth[o];
            } else if (value <= 8) {
                return romansFifth[o] + romansDigits[o].repeat(value - 5);
            } else {
                return romansDigits[o].repeat(10 - value) + romansDigits[o + 1];
            }
        }).join('');
