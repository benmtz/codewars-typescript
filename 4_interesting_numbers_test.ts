import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { isInteresting } from './4_interesting_numbers.ts';

Deno.test("solution", function(){
    assertEquals(isInteresting(3, [1337, 256]),     0);
    assertEquals(isInteresting(1336, [1337, 256]),  1);
    assertEquals(isInteresting(1337, [1337, 256]),  2);
    assertEquals(isInteresting(11208, [1337, 256]), 0);
    assertEquals(isInteresting(11209, [1337, 256]), 1);
    assertEquals(isInteresting(11211, [1337, 256]), 2);
});
