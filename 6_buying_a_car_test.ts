import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { nbMonths } from './6_buying_a_car.ts';

Deno.test("Basic tests", function() {
    assertEquals(nbMonths(
        2000, 8000, 1000, 1.5), [6, 766]
    );
    assertEquals(nbMonths(
        12000, 8000, 1000, 1.5), [0, 4000]
    );
});
