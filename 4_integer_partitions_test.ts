import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { enm } from './4_integer_partitions.ts';

Deno.test("enm(1) -> [[1]]", function() {
    assertEquals(enm(1), [[1]]);
});

Deno.test("enm(2) -> [[2], [1,1]]", function() {
    assertEquals(enm(2), [[2], [1,1]]);
});

Deno.test("enm(3) -> [[3],[2,1],[1,1,1]]", function() {
    assertEquals(enm(3), [[3],[2,1],[1,1,1]]);
});

Deno.test("enm(4) -> [[4],[3,1],[2,2],[2,1,1],[1,1,1,1]]", function() {
    assertEquals(enm(4), [[4],[3,1],[2,2],[2,1,1],[1,1,1,1]]);
});

Deno.test("enm(5) -> [[5],[4,1],[3,2],[3,1,1],[2,2,1],[2,1,1,1],[1,1,1,1,1]]", function() {
    assertEquals(enm(5), [[5],[4,1],[3,2],[3,1,1],[2,2,1],[2,1,1,1],[1,1,1,1,1]]);
});
