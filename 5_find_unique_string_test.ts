import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { findUniq, normalize } from "./5_find_unique_string.ts";

Deno.test({
    name: "findUniq",
    fn() {
        assertEquals(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']), 'BbBb');
        assertEquals(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']), 'foo');
        assertEquals(findUniq(['silvia', 'vasili', 'victor']), 'victor');
        assertEquals(findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']), 'Harry Potter');
        assertEquals(findUniq(['    ', 'a', ' ']), 'a');
}});

Deno.test({
    name: "normalized",
    fn() {
        assertEquals(normalize('Aa'), 'a');
        assertEquals(normalize('Aa '), 'a');
        assertEquals(normalize('    '), '');
        assertEquals(normalize('abbbCCCCbbAa '), 'abc');
}});
