import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { isPrime, G964 } from "./5_gap_of_prime.ts";

Deno.test("gap", function() {
    assertEquals(G964.gap(2,100,110), [101, 103]);
    assertEquals(G964.gap(2,3,50), [3, 5]);
    assertEquals(G964.gap(4,100,110), [103, 107]);
    assertEquals(G964.gap(8,300,400), [359, 367]);
    assertEquals(G964.gap(10,300,400), [337, 347]);
    assertEquals(G964.gap(6,100,110), null);
});

Deno.test("isPrime", function() {
    assertEquals(isPrime(1), false);
    assertEquals(isPrime(2), true);
    assertEquals(isPrime(5), true);
    assertEquals(isPrime(8), false);
    assertEquals(isPrime(121), false);
    assertEquals(isPrime(101), true);
});