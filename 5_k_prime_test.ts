import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { G964, getPrimeFactors } from "./5_k_prime.ts";

Deno.test({
    name: "0 to 100",
    fn() {
        assertEquals(G964.countKprimes(1, 0, 5), [2, 3, 5]);
        assertEquals(G964.countKprimes(2, 0, 100), [4, 6, 9, 10, 14, 15, 21, 22, 25, 26, 33, 34, 35, 38, 39,  46, 49, 51, 55, 57, 58, 62, 65, 69, 74, 77, 82, 85, 86, 87, 91, 93, 94, 95]);
        assertEquals(G964.countKprimes(3, 0, 100), [8, 12, 18, 20, 27, 28, 30, 42, 44, 45, 50, 52, 63, 66, 68, 70, 75, 76, 78, 92, 98, 99]);
    }
});

Deno.test({
    name: "more tests",
    fn() {
        assertEquals(G964.countKprimes(5, 1000, 1100), [1020, 1026, 1032, 1044, 1050, 1053, 1064, 1072, 1092, 1100]);
        assertEquals(G964.countKprimes(5, 500, 600), [500, 520, 552, 567, 588, 592, 594]);
    }
});

Deno.test({
    name: "getPrimeFactors",
    fn() {
        assertEquals(getPrimeFactors(8), [2,2,2]);
        assertEquals(getPrimeFactors(4), [2,2]);
        assertEquals(getPrimeFactors(12), [2,2,3]);
    }
})

Deno.test({
    name: "puzzle",
    fn() {
        assertEquals(G964.puzzle(138), 1);
    }
})
