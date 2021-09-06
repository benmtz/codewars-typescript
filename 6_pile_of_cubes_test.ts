import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import {findNb} from "./6_pile_of_cubes.ts";

Deno.test("Sums right", function() {
    assertEquals(findNb(4183059834009), 2022);
    assertEquals(findNb(24723578342962), -1);
    assertEquals(findNb(135440716410000), 4824);
    assertEquals(findNb(40539911473216), 3568);
})
