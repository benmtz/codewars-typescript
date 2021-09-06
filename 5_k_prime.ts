export class G964 {

    public static countKprimes = (k: number, start: number, end: number)  => {
        const results = [];
        for (var i = end; i >= start; i--) {
            if (getPrimeFactors(i).length === k) {
                results.unshift(i);
            }
        }
        return results;
    }
    public static puzzle = (s: any)  => {
        const ret = [];

        const sevenPrimes = G964.countKprimes(7, 0, s - 2);
        const threePrimes = G964.countKprimes(3, 0, s - 2);
        const primes = G964.countKprimes(1, 0, s - 2);

        for (const sev of sevenPrimes) {
            for (const thr of threePrimes) {
                if (sev + thr > s) {
                    break;
                }
                for (const pr of primes) {
                    if (sev + thr + pr > s) {
                        break;
                    }
                    if (sev + thr + pr === s) {
                        ret.push([pr, thr, sev]);
                    }
                }
            }
        }
        return ret.length;
    }
}

export const getPrimeFactors = (nb: number): Array<number> => {
    if (nb < 2) return [];
    const factors = [];
    const primeTable = getPrimeTable(nb);
    for (let prime of primeTable) {
        while (nb % prime === 0){
            factors.push(prime);
            nb /= prime;
        }
    }
    return factors.length ? factors: [nb];
}

let primes = {
    data: [2, 3],
    seed: 9
}
getPrimeTable = testTarget => {
    neededTable = Math.ceil(Math.sqrt(testTarget));
    if (neededTable < primes.seed) {
        return primes.filter(i => i < neededTable);
    } else {
        primes.seed = neededTable;
        lastNumber = data[data.length - 1] || 1;
        for (let candidate = lastNumber; candidate < primes.seed; i = + 2) {
            let isPrime = true;
            for (let prime in primes.data) {
                if (candidate % prime === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                data.push(candidate)
            }
        }
    }
}

buildKComposites = (k, max) => {
    let ixMatrix
    for (let i = 0; i < k; i ++) {
        for (let j = 0; j < max; j ++) {

        }
    }
    
    let compositeMatrix = [];
    for (let m = 0; m < max; m++) {
        for (let n = 0; n < max; n++) {
            compositeMatrix[n][m] = n * m;
        }
    }

}
