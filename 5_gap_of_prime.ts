import * as _ from "https://deno.land/x/lodash/";

export const G964 = {
    gap(g: number, m: number, n: number) {
        const nbs = _.fill(new Array(n-m+1), 0).map((_, i) => m + i);
        let i = 0, j = g;
        let firstGap;
        do {
            if (
                isPrime(nbs[i]) &&
                isPrime(nbs[j]) &&
                nbs.slice(i+1, j).every(n => !isPrime(n))
            ) {
                firstGap = [nbs[i], nbs[j]];
                break;
            }
            i++, j++;
        } while (nbs[j] != n && !firstGap)
        return firstGap || null;
    }
}

const primeCache: {[key: number]: boolean} = {};
export function isPrime(n: number): boolean {
    if (typeof primeCache[n] === "undefined") {
        primeCache[n] = n !== 1 && _.fill(new Array(Math.floor(Math.sqrt(n)) - 1), 0).map((_, idx) => idx + 2).every(m => n % m);
    }
    return primeCache[n];
}
