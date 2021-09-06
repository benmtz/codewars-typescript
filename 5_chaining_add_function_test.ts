import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import add from "./5_chaining_add_function.ts";

Deno.test('solution', () => {
        assertEquals(add(1),1);
        assertEquals(add(1)(2),3);
        assertEquals(add(1)(2)(3)(4)(5),15);
});
