import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { encrypt, decrypt, getPrecedingDiffRegion, unGetPrecedingDiffRegion } from "./5_simple_encription.ts";

Deno.test({
    name: "encrypt",
    fn() {
    assertEquals(
        encrypt("Do the kata \"Kobayashi-Maru-Test!\" Endless fun and excitement when finding a solution!"),
        "$-Wy,dM79H'i'o$n0C&I.ZTcMJw5vPlZc Hn!krhlaa:khV mkL;gvtP-S7Rt1Vp2RV:wV9VuhO Iz3dqb.U0w"
    );
    assertEquals(
        encrypt("This kata is very interesting!"),
        "5MyQa79H'ijQaw!Ns6jVtpmnlZ.V6p"
    );
    }
})
Deno.test({
    name: "decrypt",
    fn() {
    assertEquals(
        decrypt("$-Wy,dM79H'i'o$n0C&I.ZTcMJw5vPlZc Hn!krhlaa:khV mkL;gvtP-S7Rt1Vp2RV:wV9VuhO Iz3dqb.U0w"),
        "Do the kata \"Kobayashi-Maru-Test!\" Endless fun and excitement when finding a solution!"
    );
    assertEquals(decrypt("5MyQa9p0riYplZc"), "This is a test!");
    assertEquals(decrypt("5MyQa79H'ijQaw!Ns6jVtpmnlZ.V6p"), "This kata is very interesting!");
    }
})

Deno.test({
    name: "Edge cases",
    fn() {
        assertEquals(encrypt(""), "");
        assertEquals(decrypt(""), "");
    }
})

Deno.test("preceding", () => {
    const arr = "B61kujla".split("");
    arr.forEach(unGetPrecedingDiffRegion)
    assertEquals(arr.join(""), "BUsInEsS")
});

