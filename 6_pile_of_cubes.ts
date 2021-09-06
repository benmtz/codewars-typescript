export function findNb(m: number): number {
    let n = 0, candidate = 0;
    while (candidate < m) {
        candidate += Math.pow(n, 3);
        n++;
    };
    return candidate != m ? -1: n - 1;
}

