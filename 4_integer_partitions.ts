let dp = new Array(200).fill(0).map((_, idx) => idx);

export function enm(n: number): Array<Array<number>> {
    const partitions = [[n]];
    const cardinality = 1;
    for (let cardinality = 1; cardinality < n; cardinality++) {

    }
    return partitions;
}

export function printArray(int []p, int n) { 
    for (int i = 0; i < n; i++) {
        console.log(p[i]+" "); 
    }
} 

